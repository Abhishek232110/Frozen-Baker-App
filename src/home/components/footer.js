import {
  Box,
  Button,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  View,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { Link, useLinkTo } from "@react-navigation/native";

export default function FooterComponent() {
  return (
    <>
      <View>
        <HStack justifyContent="space-between">
          <VStack space={1} alignItems="center">
            <AntDesign name="home" size={30} color="black" />
            <Text>Home</Text>
          </VStack>
          <VStack space={1} alignItems="center">
            <Ionicons name="storefront-outline" size={24} color="black" />
            <Text>Category</Text>
          </VStack>
          <VStack space={1} alignItems="center">
            <AntDesign name="home" size={30} color="black" />
            <Text>Home</Text>
          </VStack>
          <VStack space={1} alignItems="center">
            <MaterialCommunityIcons
              name="account-box-outline"
              size={30}
              color="black"
            />
            <Text>Account</Text>
            {/* <Button title="Go to Profile" onPress={() => navigate("Profile")} /> */}
          </VStack>
        </HStack>
      </View>
    </>
  );
}
