import React from "react";
import { Pressable, View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.lightGrey : colors.white
        }
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subTitle: {
    color: colors.textGrey
  },
  title: {
    fontWeight: "500"
  }
});

export default ListItem;
