import React from 'react'
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native'

const MenuItem = props => {
    return (
        <TouchableHighlight>
            <View>
                <View>
                    <Text>{props.item.name}</Text>
                    <Text>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default MenuItem

const styles = StyleSheet.create({})
