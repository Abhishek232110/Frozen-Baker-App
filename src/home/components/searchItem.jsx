import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const SearchItem = ({ onQuery }) => {
  const [open, setOpen] = useState(false);
  console.log("open", open);
  const openMenu = () => {
    setOpen(true);
  };
  const setOnQueryChange = (text) => {
    onQuery(text);
  };
  return (
    <View className="flex-row items-center w-full h-10 rounded-md border border-buttomColor">
      <EvilIcons
        name="search"
        size={35}
        color="#FA7070"
        style={{ paddingBottom: 4 }}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setOnQueryChange(text)}
        placeholder="Search..."
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    width: "auto",
  },
});

export default SearchItem;
