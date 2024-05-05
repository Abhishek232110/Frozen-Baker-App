import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const DelivaryLocation = () => {
  const [open, setOpen] = useState(false);

  const ButtonClick = ({ title }) => {
    return (
      <>
        <TouchableOpacity>
          <Text>{title}</Text>
        </TouchableOpacity>
      </>
    );
  };
  const Demo = () => {
    return (
      <>
        <View className="flex-row justify-around items-center ">
          <View>
            <ButtonClick title="Chocolate" />
            <ButtonClick title="Cake" />
            <ButtonClick title="Icecream" />
            <ButtonClick title="Pastry" />
          </View>
          <Button title="close" onPress={() => setOpen(false)}></Button>
        </View>
      </>
    );
  };

  return (
    <>
      <View className="mt-2 pl-10 space-x-6">
        {open === false ? (
          <SimpleLineIcons
            name="menu"
            size={25}
            color="#FA7070"
            onPress={() => setOpen(true)}
          />
        ) : (
          <Demo />
        )}
      </View>
    </>
  );
};

export default DelivaryLocation;
