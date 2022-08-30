import React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.bgimage}
    >
      <View style={styles.logocontainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logoimage}
        ></Image>
        <Text style={styles.greeting}>Welcome bitches</Text>
      </View>

      <View style={styles.loginbutton} />

      <View style={styles.registerbutton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoimage: {
    height: 70,
    width: 70,
    marginBottom: 20
  },
  logocontainer: {
    position: "absolute",
    top: 100,
    alignItems: "center"
  },
  greeting: {
    color: "#889",
    fontSize: 18,
    textAlign: "center"
  },
  loginbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4"
  }
});
