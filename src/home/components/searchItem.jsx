import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const SearchItem = ({ onQuery }) => {
  const setOnQueryChange = (text) => {
    onQuery(text);
  };
  return (
    <View className="flex-row items-center w-full h-10 rounded-md border border-buttomColor bg-[#f7f0f799] mt-2">
      <EvilIcons
        name="search"
        size={35}
        color="#61677A"
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
