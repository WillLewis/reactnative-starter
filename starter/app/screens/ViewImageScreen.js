import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>

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
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30
  }
});
