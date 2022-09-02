import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.mainimage}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  mainimage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30
  }
});
