import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import RenderButton from "../common/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, View, Text, TouchableOpacity, ScrollView } from "react-native";

const NavigationButton = ({ navigation }) => {
  const [name, setName] = useState("");
  const clearstore = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Home");
  };
  const logoutButtonShowHide = async () => {
    let name = await AsyncStorage.getItem("name");
    setName(name);
  };
  logoutButtonShowHide();
  const NavigateButton = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: 250,
            marginTop: 40,
          }}
        >
          <RenderButton
            logoIcon={<AntDesign name="user" size={24} color="black" />}
            navigation={navigation}
            rendercomponentname="Personal Information"
            renderscreen="Personal Information"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={
              <SimpleLineIcons name="location-pin" size={24} color="black" />
            }
            navigation={navigation}
            rendercomponentname="Saved Addresses"
            renderscreen="Saved Addresses"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={<Entypo name="new-message" size={20} color="black" />}
            navigation={navigation}
            rendercomponentname="Share App Feedback"
            renderscreen="Saved Addresses"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />
          <RenderButton
            logoIcon={<MaterialIcons name="privacy-tip" size={24} />}
            navigation={navigation}
            rendercomponentname="Privacy Policy"
            renderscreen="Saved Addresses"
            rightArrowIcon={<AntDesign name="right" size={24} color="black" />}
          />

          <TouchableOpacity className="bg-zinc-100" onPress={clearstore}>
            <View className="flex-row  items-center justify-between w-full">
              <View className="flex-row items-center space-x-3">
                <MaterialIcons name="logout" size={24} color="black" />
                <Text>Logout</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableOpacity>

          {/* {seller ? (
            <RenderButton
              logoIcon={
                <MaterialIcons
                  name="drive-folder-upload"
                  size={24}
                  color="black"
                />
              }
              navigation={navigation}
              rendercomponentname="Upload Product"
              renderscreen="Upload Product"
              rightArrowIcon={
                <AntDesign name="right" size={24} color="black" />
              }
            />
          ) : null} */}
        </View>
      </>
    );
  };
  return (
    <>
      <View>
        <NavigateButton />
      </View>
    </>
  );
};

export default NavigationButton;
