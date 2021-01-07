import React,{useEffect} from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getDishes } from "../redux/actionCreators";


const mapStateToProps = state =>{
  return {
    dishes : state.dishes
  }
}


const mapDispatchToProps = dispatch =>{
  return {
    getDishes : ()=>dispatch(getDishes())
  }
}

const MenuScreen = (props) => {
  console.log("MenuScreen props--->", props);

  useEffect(()=>{
    props.getDishes()
  },[])

  return (
    <View>
      <Text>MenuScreen</Text>
      <Button 
      title = "Dish Detail"
      onPress={()=>props.navigation.navigate("Dish Detail")}/>
    </View>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuScreen);
