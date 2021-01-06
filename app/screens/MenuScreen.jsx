import React from "react";
import { View, Text, Button } from "react-native";

const MenuScreen = (props) => {
  console.log("MenuScreen props--->", props);

  return (
    <View>
      <Text>MenuScreen</Text>
      <Button 
      title = "Dish Detail"
      onPress={()=>props.navigation.navigate("Dish Detail")}/>
    </View>
  );
};

export default MenuScreen;
