import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
export default function FooterComponent({ navigation }) {
  // const [name, setName] = useState();

  // const getData = async () => {
  //   const name = await AsyncStorage.getItem("username");
  //   setName(name);
  // };
  // getData();
  const ButtonCom = ({ navigationTitle, title, titleIcon }) => {
    return (
      <>
        <View className="flex-col items-center rounded-md">
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationTitle)}
          >
            {titleIcon}
          </TouchableOpacity>
          <Text>{title}</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <View className="flex-row justify-between px-4  rounded-t-3xl pt-4 pb-1  items-center">
        <ButtonCom
          navigationTitle="Home"
          title="Home"
          titleIcon={<AntDesign name="home" size={25} />}
        />
        <ButtonCom
          navigationTitle="Products"
          title="Products"
          titleIcon={<Ionicons name="storefront-outline" size={25} />}
        />
        <ButtonCom
          navigationTitle="Products"
          title="Products"
          titleIcon={
            <MaterialCommunityIcons name="account-box-outline" size={25} />
          }
        />
        <ButtonCom
          navigationTitle="Account"
          titleIcon={
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="black"
            />
          }
          title="Account"
        />
      </View>
    </>
  );
}
