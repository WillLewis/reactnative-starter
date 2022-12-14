import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/will.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/will.jpg")
  }
];

//alternative use const
const renderItem = ({ item }) => (
  <ListItem
    title={item.title}
    subTitle={item.description}
    image={item.image}
    onPress={() => console.log("Message selected", item)}
  />
);

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={renderItem}
        //alternative
        //renderItem={({ item }) => (
        //   <ListItem
        //     title={item.title}
        //     subTitle={item.description}
        //     image={item.image}
        //   />
        // )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
