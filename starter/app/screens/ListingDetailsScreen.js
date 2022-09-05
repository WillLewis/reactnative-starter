import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/will.jpg")}
            title="Will Lewis"
            subTitle="5 Listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 7
  },
  userContainer: {
    marginVertical: 40
  }
});
export default ListingDetailsScreen;
