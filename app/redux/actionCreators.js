import axios from "axios";
import * as actionTypes from "./actionTypes";




export const loadDishes = dishes =>{
    return {
        type : actionTypes.LOAD_DISHES,
        payload : dishes,
    }
}

export const getDishes = ()=>dispatch=>{
    axios.get("https://restaurantapp-cea68-default-rtdb.firebaseio.com/dishes.json")
    .then(response=>{
        //console.log("getDishes  response----> : ",response)
        dispatch(loadDishes(response.data))
    })
    .catch(error=>console.log("getDishes  error----> : ",error))
}


export const addToFavourites = dish =>{
    return {
        type :actionTypes.ADD_TO_FAVOURITES,
        payload : dish,
    }
}

export const removeFavourites = dishId =>{
    return {
        type : actionTypes.REMOVE_TO_FAVOURITES,
        payload : dishId,
    }
}