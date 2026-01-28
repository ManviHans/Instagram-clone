import { View, Text, Pressable, StyleSheet } from 'react-native'
import { StatusBar } from "expo-status-bar"

export default function InstagramHearder(){
    return (
        <>
        <StatusBar style='dark' backgroundColor = '#ffffff' />
        <View style = { styles.container }>
            <Pressable 
            style= { styles.iconBox }>
                <Text style = {styles.icon}>+</Text>
            </Pressable>
            <Text style= { styles.logo }>Instagram</Text>

            <Pressable style={ styles.iconBox }>
                <Text>heart </Text>
            </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 28,
    color: "#000",
  },
  iconBox: {
    width: 40,
    alignItems: "center",
  },
  icon: {
    fontSize: 26,
    color: "#000",
  },
});
