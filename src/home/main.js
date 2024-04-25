import React from "react";
import { NativeBaseProvider, Text, VStack } from "native-base";
import HeaderComponnet from "./components/header";
import FooterComponent from "./components/footer";

const MainScreen = () => {
  return (
    <NativeBaseProvider>
      <VStack
        h="full"
        paddingBottom="10px"
        paddingTop="6px"
        paddingLeft="20px"
        paddingRight="20px"
        bg="warmGray.200"
      >
        <HeaderComponnet />
        <FooterComponent />
      </VStack>
    </NativeBaseProvider>
  );
};

export default MainScreen;
