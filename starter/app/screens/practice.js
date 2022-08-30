import React from 'react';
import {Image, StyleSheet, ImageBackground ,Text, View } from 'react-native';

export default function App () {
    return (
        <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode='cover'
      style={StyleSheet.bgimage}
    ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgimage:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logoimage:{
        height: 70,
        width: 70,
        marginBottom: 20
    },
    logocontainer:{
        position: 'absolute',
        top: 100
        alignItems: 'center'

    },



});
