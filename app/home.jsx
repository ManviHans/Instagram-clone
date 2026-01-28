import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useFonts, Roboto_500Medium, Roboto_300Light, Roboto_600SemiBold, Roboto_400Regular, ro, Roboto_700Bold,  } from '@expo-google-fonts/roboto'
import { TouchableOpacity } from 'react-native';




const home = () => {
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
    <View style= {{ flex :1, backgroundColor: '#ffffff'}}>
      <View style = {{ flexDirection: 'row',  alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 30,
      paddingBottom : 15,
      paddingHorizontal: 12,}}>
        <Image source={require('@/assets/images/plus.png')} 
        style = {{marginLeft:10, width: 20, height: 20, resizeMode: 'contain'}}
        />
       <Image source = {require('@/assets/images/Instagram_midtext.png')}
       style = {{ height: 60, width: 120, resize : 'contain', marginTop: 4, marginBottom: -10, tintColor: '#000000ff', }}
       />
       <Image source = {require('@/assets/images/heart (1).png')}
       style = {{  marginLeft:10, width: 20, height: 20, resizeMode: 'contain', alignItems: 'flex-end'}}
       />
      </View>
    <ScrollView>

    <ScrollView horizontal 
    showsHorizontalScrollIndicator={false}>
   

      <View 
      style = {{ paddingHorizontal : 10, }}>
      <Image 
      source={require('@/assets/images/profile1.jpg')}
      style= { styles.profilepic }/>
      <Text 
      style ={ styles.profiletext }>Your story</Text>
      </View>

      <View 
      style = {{ paddingHorizontal : 10, }}>
      <Image 
      source={require('@/assets/images/profile2.jpg')}
      style= { styles.profilepic }/>
      <Text 
      style ={ styles.profiletext }>shinchan</Text>
      </View>

      <View 
      style = {{ paddingHorizontal : 10, }}>
      <Image 
      source={require('@/assets/images/profile3.jpg')}
      style= { styles.profilepic }/>
      <Text 
      style ={ styles.profiletext }>billa_bad</Text>
      </View>

      <View 
      style = {{ paddingHorizontal : 10, }}>
      <Image 
      source={require('@/assets/images/profile4.jpg')}
      style= { styles.profilepic }/>
      <Text 
      style ={ styles.profiletext }>stuartlittle</Text>
      </View>

      <View 
      style = {{ paddingHorizontal : 10, }}>
      <Image 
      source={require('@/assets/images/profile5.jpg')}
      style= { styles.profilepic }/>
      <Text 
      style ={ styles.profiletext }>chipku</Text>
      </View>

      <View 
      style = {{ paddingHorizontal : 10, }}>
      <Image 
      source={require('@/assets/images/profile6.jpg')}
      style= { styles.profilepic }/>
      <Text 
      style ={ styles.profiletext }>crabyatwork</Text>
      </View>
      
    
    </ScrollView>
    <View style={{ flexDirection: 'row'}}>
    <Image source ={require('@/assets/images/profile6.jpg')} 
    style = {{ 
      width:15,
      height :15,
      padding:14,
      borderRadius: 50,
      margin: 14,
      }}/>
      <View>
      <Text style = {{
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
        paddingTop: 10,
        marginLeft:4,
      }}>crabyatwork</Text>
      <Text style = {{
        fontFamily: 'Roboto_700Bold',
        fontSize: 10,
        paddingTop: 0,
        marginLeft:4,
      }}
      >music . Location</Text>
      </View>
      <Image source = {require('@/assets/images/dots.png')} 
      style = {{ 
      width : 22,
      height : 22,
      marginLeft: 200,
      marginTop: 22,
      }}/>
      </View>
      <Image source={require('@/assets/images/profile6.jpg')}
      style = {{
        width: 355,
        height : 350,
        margin : -4,
      }}/>
      <View style= {{ flexDirection: 'row'}}>
        <Image source = { require ('@/assets/images/heart (1).png')}
        style = {{ height : 20, width : 20, marginLeft: 6, marginTop: 4}}/>
        <Image source = { require ('@/assets/images/bubble-chat.png')}
        style = {{ height : 20, width : 20, marginLeft: 6, marginTop: 4}}/>
         <Image source = { require ('@/assets/images/send (1).png')}
        style = {{ height : 20, width : 20, marginLeft: 6, marginRight: 240, marginTop: 4}}/>
         <Image source = { require ('@/assets/images/bookmark.png')}
        style = {{ height : 20, width : 20, marginLeft: 6, paddingeRight: 60, marginTop: 4}}/>
      </View>
      <View  
      style={{
      flexDirection: 'row ',
      }}>
      <Text style = {{
        fontWeight: 'bold',
      }}> crabyatwork </Text>
      <Text styles= {{
      }}> Working as hard as my shell  #2026</Text>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 18}}> Suggested for you </Text>
      <ScrollView horizontal>
        <View
        style={{
      width: 170,
      height: 240,
      borderRadius: 10,
      borderWidth:1,
      margin : 15,
      borderColor: '#b3b0b0ff',
      backgroundColor: '#ffffffff',
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Image source ={require('@/assets/images/profile1.jpg')}
      style ={{ borderRadius : 100, width: 120, height: 120, justifyContent: 'center', alignItems: 'cemter'}}/>
      <Text style= {{fontWeight: 'bold', marginTop: 10}}> masstikhor </Text>
      <Text style ={{ color : "#9f9999ff" }}> Suggested for you</Text>
      <TouchableOpacity
             style={{ 
              backgroundColor: '#1877F2',
              borderRadius:5, 
              paddingHorizontal:50, 
              paddingVertical:5     ,
              marginTop: 10,
            }} 
             >
      
              <Text
               style={{ color: 'white', fontWeight: 'bold'  }}>
                Follow
              </Text>
            </TouchableOpacity>
        </View>
         <View
        style={{
      width: 170,
      height: 240,
      borderRadius: 10,
      borderWidth:1,
      margin : 15,
      borderColor: '#b3b0b0ff',
      backgroundColor: '#ffffffff',
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Image source ={require('@/assets/images/profile1.jpg')}
      style ={{ borderRadius : 100, width: 120, height: 120, justifyContent: 'center', alignItems: 'cemter'}}/>
      <Text style= {{fontWeight: 'bold', marginTop: 10}}> masstikhor </Text>
      <Text style ={{ color : "#9f9999ff" }}> Suggested for you</Text>
      <TouchableOpacity
             style={{ 
              backgroundColor: '#1877F2',
              borderRadius:5, 
              paddingHorizontal:50, 
              paddingVertical:5     ,
              marginTop: 10,
            }} 
             >
      
              <Text
               style={{ color: 'white', fontWeight: 'bold'  }}>
                Follow
              </Text>
            </TouchableOpacity>
        </View>
         <View
        style={{
      width: 170,
      height: 240,
      borderRadius: 10,
      borderWidth:1,
      margin : 15,
      borderColor: '#b3b0b0ff',
      backgroundColor: '#ffffffff',
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Image source ={require('@/assets/images/profile1.jpg')}
      style ={{ borderRadius : 100, width: 120, height: 120, justifyContent: 'center', alignItems: 'cemter'}}/>
      <Text style= {{fontWeight: 'bold', marginTop: 10}}> masstikhor </Text>
      <Text style ={{ color : "#9f9999ff" }}> Suggested for you</Text>
      <TouchableOpacity
             style={{ 
              backgroundColor: '#1877F2',
              borderRadius:5, 
              paddingHorizontal:50, 
              paddingVertical:5     ,
              marginTop: 10,
            }} 
             >
      
              <Text
               style={{ color: 'white', fontWeight: 'bold'  }}>
                Follow
              </Text>
            </TouchableOpacity>
        </View>
         <View
        style={{
      width: 170,
      height: 240,
      borderRadius: 10,
      borderWidth:1,
      margin : 15,
      borderColor: '#b3b0b0ff',
      backgroundColor: '#ffffffff',
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <Image source ={require('@/assets/images/profile1.jpg')}
      style ={{ borderRadius : 100, width: 120, height: 120, justifyContent: 'center', alignItems: 'cemter'}}/>
      <Text style= {{fontWeight: 'bold', marginTop: 10}}> masstikhor </Text>
      <Text style ={{ color : "#9f9999ff" }}> Suggested for you</Text>
      <TouchableOpacity
             style={{ 
              backgroundColor: '#1877F2',
              borderRadius:5, 
              paddingHorizontal:50, 
              paddingVertical:5     ,
              marginTop: 10,
            }} 
             >
      
              <Text
               style={{ color: 'white', fontWeight: 'bold'  }}>
                Follow
              </Text>
            </TouchableOpacity>
        </View>

      </ScrollView>


       <View style={{ flexDirection: 'row'}}>
    <Image source ={require('@/assets/images/profile6.jpg')} 
    style = {{ 
      width:15,
      height :15,
      padding:14,
      borderRadius: 50,
      margin: 14,
      }}/>
      <View>
      <Text style = {{
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
        paddingTop: 10,
        marginLeft:4,
      }}>billa_bad</Text>
      <Text style = {{
        fontFamily: 'Roboto_700Bold',
        fontSize: 10,
        paddingTop: 0,
        marginLeft:4,
      }}
      >music . Location</Text>
      </View>
      <Image source = {require('@/assets/images/dots.png')} 
      style = {{ 
      width : 22,
      height : 22,
      marginLeft: 200,
      marginTop: 22,
      }}/>
      </View>
      <Image source={require('@/assets/images/profile3.jpg')}
      style = {{
        width: 355,
        height : 350,
        margin : -4,
      }}/>
      <View style= {{ flexDirection: 'row'}}>
        <Image source = { require ('@/assets/images/heart (1).png')}
        style = {{ height : 20, width : 20, marginLeft: 6, marginTop: 4}}/>
        <Image source = { require ('@/assets/images/bubble-chat.png')}
        style = {{ height : 20, width : 20, marginLeft: 6, marginTop: 4}}/>
         <Image source = { require ('@/assets/images/send (1).png')}
        style = {{ height : 20, width : 20, marginLeft: 6, marginRight: 240, marginTop: 4}}/>
         <Image source = { require ('@/assets/images/bookmark.png')}
        style = {{ height : 20, width : 20, marginLeft: 6, paddingeRight: 60, marginTop: 4}}/>
      </View>
      <View  
      style={{
      flexDirection: 'row ',
      }}>
      <Text style = {{
        fontWeight: 'bold',
      }}> billa_bad </Text>
      <Text styles= {{

      }}> blackorange #newyear</Text>
      </View>
       <ScrollView>
        <View styles={{backgoundColor:"#758577", width:10, flex:0.5}}>
          <Image>

          </Image>
        </View>
      </ScrollView>
    </ScrollView>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  profilepic:{
        width : 60,
        height: 60,
        borderRadius: 50,
        borderWidth:0.1,
        borderColor: '#d5d0d0ff',
        paddingHorizontal: 20,
  },
  profiletext:{
    fontSize: 10,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
        textAlign:'center',
  },
  postprofile:{
      width:15,
      height :15,
      padding:14,
      borderRadius: 50,
      margin: 10,
  },
  postusername:{

  }
  
  
})