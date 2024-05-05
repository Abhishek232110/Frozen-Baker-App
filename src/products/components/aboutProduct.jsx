import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AboutProduct = () => {
  const ReUseCompo = ({ firsticon, title }) => {
    return (
      <>
        <TouchableOpacity>
          <View className="flex-row justify-between items-center h-12 border border-zinc-400 rounded-md px-2">
            <View className="flex-row justify-start items-center space-x-2">
              <View className="bg-zinc-400 p-1 rounded-md">{firsticon}</View>
              <Text className="text-base">{title}</Text>
            </View>
            <AntDesign name="plus" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View>
      <AntDesign name="profile" size={24} color="black" />
      <Text>AboutProduct</Text>

      <AntDesign name="plus" size={24} color="black" />
      <ReUseCompo
        firsticon={<AntDesign name="profile" size={24} color="white" />}
        title="Product Description"
      />
      <ReUseCompo
        firsticon={<SimpleLineIcons name="book-open" size={24} color="white" />}
        title="Care Instruction"
      />
      <ReUseCompo
        firsticon={
          <MaterialCommunityIcons
            name="truck-delivery-outline"
            size={24}
            color=""
          />
        }
        title="Delivary Information"
      />
    </View>
  );
};

export default AboutProduct;
