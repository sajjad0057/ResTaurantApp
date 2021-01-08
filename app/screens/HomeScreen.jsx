import React from "react";
import { StyleSheet, Text, View, SafeAreaView,Platform,ImageBackground } from "react-native";
import Constants from 'expo-constants';
import restaurantAppBG from "../../assets/restaurantAppBG.jpg";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={restaurantAppBG} style={styles.image}>
    <SafeAreaView>
      <View style={styles.view}>
      <Text style={styles.text}>WelCome</Text>
      </View>
    </SafeAreaView>
      
    </ImageBackground>
  </View>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    view : {
        paddingTop : Platform.OS==='ios' ? 0 : Constants.statusBarHeight,
        //here the Placform API provide the device Type,  for more see react-native API
    },
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
});
