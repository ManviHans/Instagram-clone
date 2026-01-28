import { router, Stack } from "expo-router";
import { Pressable, Image } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, 
        headerShadowVisible:false,  
        title: "",           
        headerLeft: () => (
          <Pressable onPress={() => router.back()}>
           <Image source={require('@/assets/images/arrow-left.png')}
           style = {{ width: 24, height: 24, resizeMode: 'contain'}}/>
          </Pressable>
        ),
      }}
    />
  );
}
