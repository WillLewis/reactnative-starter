import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
