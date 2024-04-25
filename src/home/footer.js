import {
  Box,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
  View,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            <AntDesign name="home" size={30} color="black" />
            <Text>Catogery</Text>
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
          </VStack>
        </HStack>
      </View>
    </>
  );
}
