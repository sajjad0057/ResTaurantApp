import React from 'react'
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'

const MenuItem = props => {
    return (
        <TouchableHighlight 
        underlayColor="#DDDDDD"
        onPress={props.selectDish}
        >
            <View style={styles.container}>
                {props.item.image && <Image source={{uri: props.item.image}} style={styles.imgStyle}/>}
                <View style={styles.details}> 
                    <Text style={styles.name}>{props.item.name}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        flexDirection : "row",
        paddingTop : 15,
        borderBottomWidth:3,
        borderColor:"#878b91",
        margin : 2,
        padding:20
    },
    details : {
        flex : 1,
        marginLeft : 10,
        justifyContent : "center"
    },
    imgStyle : {
        width : 80,
        height : 80
    },
    name : {
        fontWeight : "500",

    },
    description : {
        color : "#6e6969"
    }


})
