import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDetailScreen from "./screens/DishDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "./components/Icon";
import { useNavigation } from '@react-navigation/native';
import FavouritesScreen from "./screens/FavouritesScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
    //console.log("MenuStack navigation----> :",navigation);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerRight:()=>(<Icon 
            name="ios-menu"
            color="white"
            size={30}
            iconStyle={{
                paddingRight:20
            }}
            action={()=>navigation.toggleDrawer()}
            />),
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#fc4d0d" },
        headTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Dish Detail" component={DishDetailScreen}
      options={({route})=>({title:route.params.dish.name})}
      />
    </Stack.Navigator>
  );
};


const FavItems = ()=>{
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerRight:()=>(<Icon 
            name="ios-menu"
            color="white"
            size={30}
            iconStyle={{
                paddingRight:20
            }}
            action={()=>navigation.toggleDrawer()}
            />),
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#fc4d0d" },
        headTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Favourites"  component={FavouritesScreen}/>
    </Stack.Navigator>
  )

}


const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuStack} />
      <Drawer.Screen name="Favourites" component={FavItems} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
