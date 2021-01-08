import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Icon from "../components/Icon";
import { addToFavourites, removeFavourites } from "../redux/actionCreators";
//import { useRoute } from '@react-navigation/native';

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourites: dish => dispatch(addToFavourites(dish)),
    removeFavourites : dishId =>dispatch(removeFavourites(dishId))
  };
};

const DishDetailScreen = (props) => {
  const dish = props.route.params.dish;
  //const route = useRoute()
  //console.log("DishDetailScreen route---->: ", route.params.dish);
  //console.log("DishDetailScreen ---->: ",dish);
  //console.log("DishDetailScreen  props.favourites---->: ",props.favourites);

  const isFavourite = props.favourites.some((item) => item.id === dish.id);
  //console.log("isFavourite---->",isFavourite);
// some() js function return true or false base on conditional check of array

  const markFavourite = (dish) => {
    //console.log("DishDetailScreen  markFavourite dish---->: ",dish.id);
      if(isFavourite){
        props.removeFavourites(dish.id);
      }else{
        props.addToFavourites(dish);
      }
    
  };

  let iconsName = null;
  if(isFavourite){
      iconsName = "md-heart"
  }else{
      iconsName="heart-outline"
  }



  return (
    <View>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.details}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View>
            <Text style={styles.name}>{dish.name}</Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Icon
              name={iconsName}
              color="#F53B50"
              size={35}
              iconStyle={{ padding: 0 }}
              action={() => markFavourite(dish)}
            />
          </View>
        </View>
        <Text style={styles.description}>{dish.description}</Text>
      </View>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    color: "orange",
  },
  details: {
    padding: 10,
  },
  description: {
    color: "#878b91",
    marginTop: 10,
  },
});
