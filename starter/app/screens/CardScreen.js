import React from "react";
import { View } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";

export default function CardScreen() {
  return (
    <View
      style={{
        backgroundColor: colors.backgroundGrey,
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
