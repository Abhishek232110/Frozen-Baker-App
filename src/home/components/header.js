import {
  Box,
  Button,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";
export default function HeaderComponnet({ navigation }) {
  return (
    <>
      <NativeBaseProvider>
        <HStack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>FooterComponent</Box>
          <Box>FooterComponent</Box>
          <Button
            colorScheme="white"
            onPress={() => navigation.navigate("cart")}
          >
            <AntDesign name="shoppingcart" size={30} color="black" />
          </Button>
        </HStack>
      </NativeBaseProvider>
    </>
  );
}
