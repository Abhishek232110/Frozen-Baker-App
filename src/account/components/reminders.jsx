import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import {
  Entypo,
  Fontisto,
  AntDesign,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Reminders = () => {
  const className = " my-2 mx-2  px-2 rounded-md  w-full ";
  return (
    <>
      <View className="flex-row justify-center mt-2">
        <Text className="text-xl text-textColor">Add A Quick Reminder </Text>
        <Entypo name="flash" size={30} color="#E4AC4F" />
      </View>
      <View className=" m-4 bg-[#F4EDE7]  rounded-md">
        <View className="flex-row items-center bg-gray-200 mx-2 my-2 pl-2 rounded-md ">
          <AntDesign name="user" size={24} color="#E4AC4F" />
          <TextInput className={className} placeholder="Gift Receiver's Name" />
        </View>
        <View className="flex-row items-center  bg-gray-200 mx-2 my-2 pl-2 rounded-md ">
          <AntDesign name="gift" size={24} color="#E4AC4F" />
          <TextInput className={className} placeholder="Gift Name" />
        </View>
        <View className="flex-row items-center  bg-gray-200 mx-2 my-2 pl-2 rounded-md ">
          <FontAwesome name="handshake-o" size={24} color="#E4AC4F" />
          <TextInput className={className} placeholder="Relation" />
        </View>
        <View className="flex-row items-center  bg-gray-200 mx-2 my-2 pl-2 rounded-md ">
          <MaterialIcons name="celebration" size={24} color="#E4AC4F" />
          <TextInput className={className} placeholder="Ocassion" />
        </View>

        <View className="flex-row items-center bg-gray-200 mx-2 my-2 pl-2 rounded-md">
          <Fontisto name="date" size={24} color="#E4AC4F" />
          <TextInput className={className} placeholder="DD-MM-YYYY" />
        </View>
        <TouchableOpacity>
          <View className="bg-[#E4AC4F] h-11 mt-4  mx-2 rounded-md flex justify-center ">
            <Text className="text-center text-white ">Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Reminders;
