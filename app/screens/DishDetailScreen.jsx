import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
//import { useRoute } from '@react-navigation/native';

const DishDetailScreen = (props) => {
    const dish = props.route.params.dish
  //const route = useRoute()
  //console.log("DishDetailScreen route---->: ", route.params.dish);
  console.log("DishDetailScreen ---->: ",dish);
  return (
    <View>
      <Image source={{uri : dish.image}} style={styles.image}/>
      <View style={styles.details}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
      </View>
    </View>
  );
};

export default DishDetailScreen;


const styles = StyleSheet.create({
    image :{
        width : "100%",
        height : 300,
    },
    name : {
        fontSize:20,
        fontWeight:"500",
        color : "orange"
    },
    details : {
        padding:10,
    },
    description : {
        color : "#878b91",
        marginTop:10
    }
})
