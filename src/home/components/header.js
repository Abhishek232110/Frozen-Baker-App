import { Box, HStack, NativeBaseProvider, VStack } from "native-base";

import { AntDesign } from "@expo/vector-icons";
export default function HeaderComponnet() {
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
          <VStack space={1} alignItems="center">
            <AntDesign name="shoppingcart" size={30} color="black" />
          </VStack>
        </HStack>
      </NativeBaseProvider>
    </>
  );
}
