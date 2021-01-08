import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const FavouriteCard = props => {
    return (
        <View style={styles.card}>
            <Image source={{uri:props.item.image}} style={styles.img}/>
            <View style={styles.detail}>
                <Text style={styles.title}>{props.item.name}</Text>
            </View>
        </View>
    )
}

export default FavouriteCard

const styles = StyleSheet.create({
    card :{
        borderRadius:5,
        backgroundColor:"white",
        overflow:"hidden",
        margin:10,
        elevation:5,

    },
    detail :{
        padding : 15,
    },
    img :{
        width :"100%",
        height :150,
    },
    title :{
        marginBottom : 7,
        fontSize : 20
    }

})
