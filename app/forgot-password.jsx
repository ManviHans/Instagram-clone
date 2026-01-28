import { StyleSheet, Text, Touchable, TouchableOpacity, Pressable, Image, View, TextInput } from 'react-native'
import React from 'react'
import { useFonts, Roboto_500Medium, Roboto_300Light, Roboto_600SemiBold, Roboto_400Regular, ro } from '@expo-google-fonts/roboto'
import { router } from 'expo-router'

const Forgotpassword = () => {
    let [fontsLoaded, fontError] = useFonts({
        Roboto_500Medium,
        Roboto_300Light,
        Roboto_600SemiBold,
        Roboto_400Regular
      });

      if (!fontsLoaded && !fontError) {
        return null; // or a loading spinner
      }
  return (
    
    <View style={{ paddingHorizontal: 12, paddingTop: 35, flex: 1, backgroundColor: '#ffffff',  }}>
        <View style ={{
        position: 'absolute',
      top: 40,
      
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      }}>
      
      <Pressable onPress={() => router.back()}>
                 <Image source={require('@/assets/images/arrow-left.png')}
                 style = {{ width: 24, height: 24, marginLeft: 10, resizeMode: 'contain'}}/>
                </Pressable>
      </View>
      <View style= {{ marginTop: 50,}}>
        <Text
        style={{
          fontSize: 24, 
          fontFamily:'Roboto_600SemiBold', 
          top: 10
          }}>
        Find your account
        </Text>
        <Text 
        style={{
          fontFamily:'Roboto_400Regular',
          gap: 20,
          position: 'relative',
          marginTop: 15,
          }}>
          Enter your email address or 
          </Text>
        <TouchableOpacity>
          <Text style={{
            fontFamily:'Roboto_500Medium',
            color: '#3879e2ff',
            marginTop: 2,
          }}>
            Can't reset your password?
          </Text>
        </TouchableOpacity>
        <TextInput 
         placeholder='Email address or username' 
         style={{
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderRadius: 10,
          color: '#000000',
          padding: 10,
          paddingVertical: 15,
          borderColor: '#c4c4c4ff',
          marginTop: 20,
         }}/>
        <TouchableOpacity>
          <Text style={{
            backgroundColor: '#3879e2ff',
            color: '#ffffff',
            textAlign: 'center',
            paddingVertical: 10,
            borderRadius: 35,
            fontFamily: 'Roboto_500Medium',
            marginTop: 20,
          }}>
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            fontFamily:'Roboto_500Medium',
            textAlign: 'center',
            marginTop: 12,
          }}>
            Find by mobile number
          </Text>
        </TouchableOpacity>
      <Text style={{
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'Roboto_400Regular',
        color: '#808080',
      }}>
        ────────────── OR ───────────────

      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff',
          alignItems: 'center',
          borderColor: '#c4c4c4ff',
          borderWidth: 1,
          paddingVertical: 7,
          borderRadius: 35,
          fontFamily: 'Roboto_700Bold',

        }}>
        <Text style={{
          fontFamily: 'Roboto_500Medium',
        }}
        onPress={() => {alert('Login with Google')}}>
          ⓕ︎ Log in with Facebook
        </Text>
      </TouchableOpacity>
     </View> 
    </View>
  )
}

export default Forgotpassword

const styles = StyleSheet.create({
    text1: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Sans-serif'
    }
})