import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Modal, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';



export default function App() {
  const router = useRouter();

  const onCreateAccountPress = () => {
    router.navigate('/createaccount');
  }

  const onForgotPasswordPress = () => {
    router.navigate('/forgot-password');
  }

  const onLoginPress = () => {
    router.navigate('./home')
  }

  const [visible, setVisible] = useState(false);



  return (
    <View style={styles.container}>
      <View style ={{
        position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      
      <Text style={{fontWeight: 'bold', }}>English(US)</Text>
      <Pressable>
        <Image source ={require('@/assets/images/down-arrow.png')}
      style ={{ width : 12, height: 12, marginTop:5}}
      onPress={() => setVisible(true)} />
      </Pressable>

     </View>
      
      <Image
       source={require('@/assets/images/instagram.png')} 
       style={{
         width: 65, 
         height: 65, 
         marginBottom: 50 
         }} />
      <View style={{ padding: 10 }}>
      <TextInput placeholder='Username, email or mobile number '
       style={{ 
        backgroundColor: '#ffffff', 
        borderWidth: 1, 
        borderColor: '#3a3838ff', 
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
        textAlign: 'left'
        }}/>
      <TextInput placeholder='Password'  
      style={{
        width: 330,
        backgroundColor: '#ffffff', 
        borderWidth: 1, 
        borderColor: '#3a3838ff', 
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
        textAlign: "left",
        
      }}
      />
      </View>

      <TouchableOpacity
       style={{ 
        backgroundColor: '#1877F2',
        borderRadius:30, 
        paddingHorizontal:150, 
        paddingVertical:10}} 
       onPress={onLoginPress}>

        <Text
         style={{ color: 'white', fontWeight: 'bold'  }}>
          Log in
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={onForgotPasswordPress}>
        <Text
         style={{ color: '#000000', fontWeight: 'bold' }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
           marginBottom: 20, 
           justifyContent: 'flex-end', 
            position: 'absolute', 
           bottom: 40,
           backgroundColor: '#FFFFFF',
        borderWidth: 1,
           borderColor: '#1877F2',
        borderRadius:30, 
       paddingHorizontal:100,
        paddingVertical:10
          }}
        onPress={onCreateAccountPress}>
        <Text
         style={{ color: '#1877F2', fontWeight: 'bold' }}>
          Create new account
        </Text>
      </TouchableOpacity>
      <Text style={{ 
        color: '#757070ff', 
        fontWeight: 'bold', 
        bottom: 27, 
        position: 'absolute'
         }}>
          ∞ Meta
      </Text>
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
