import React from "react";
import { StyleSheet, Text, View, Image, Pressable,Alert } from "react-native";
import { connect } from "react-redux";
import { removeFavourites } from "../redux/actionCreators";

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavourites: (dishId) => dispatch(removeFavourites(dishId)),
  };
};

const FavouriteCard = (props) => {
    const removeFev=()=>{
        Alert.alert(
            "Delete Fevourite Dish ?",
            "Are you want To Sure Delete Favourite dish"+props.item.name +" ?",
            [
                {
                    text : "Cancel",
                    onPress:()=>console.log("Cancelled"),
                    style:"cancel"
                },
                {
                    text : "OK",
                    onPress:()=>props.removeFavourites(props.item.id)
                }

            ],
            {cancelable:false}

        )
    }
  return (
    <Pressable onLongPress={()=>removeFev()}>
      <View style={styles.card}>
        <Image source={{ uri: props.item.image }} style={styles.img} />
        <View style={styles.detail}>
          <Text style={styles.title}>{props.item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default connect(null, mapDispatchToProps)(FavouriteCard);

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: "white",
    overflow: "hidden",
    margin: 10,
    elevation: 7,
  },
  detail: {
    padding: 15,
  },
  img: {
    width: "100%",
    height: 150,
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
  },
});
