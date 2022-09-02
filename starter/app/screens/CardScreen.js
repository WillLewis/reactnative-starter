import React from "react";
import { View } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";

export default function CardScreen() {
  return (
    <View
      style={{
        backgroundColor: "f8f4f4",
        padding: 20,
        paddingTop: 100
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$10"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}
