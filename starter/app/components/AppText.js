import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
// encapsulating style in a custom text component

import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
});
export default AppText;
