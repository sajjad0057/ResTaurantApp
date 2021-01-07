import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

const Icon = () => {
    return (
        <TouchableOpacity style={{paddingRight:20}}>
            <Ionicons name="ios-menu" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default Icon

const styles = StyleSheet.create({})
