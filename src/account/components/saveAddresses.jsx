import { View, Text } from "react-native";
import React from "react";

const SavedAddressComponent = ({ route }) => {
  const { id } = route.params;
  console.log("id", id);
  return (
    <View>
      <Text>SavedAddressComponent</Text>
    </View>
  );
};

export default SavedAddressComponent;
