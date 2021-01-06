import React from "react";
import { StyleSheet, Text, View, SafeAreaView,Platform } from "react-native";
import Constants from 'expo-constants';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    view : {
        paddingTop : Platform.OS==='ios' ? 0 : Constants.statusBarHeight,
    }
});
