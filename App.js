import React from "react";
import { Center, Flex, NativeBaseProvider, Spacer, VStack } from "native-base";

import HeaderComponnet from "./src/home/header";
import HomeComponent from "./src/home/home";
import FooterComponent from "./src/home/footer";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack
        h="full"
        paddingBottom="10px"
        paddingTop="40px"
        paddingLeft="15px"
        paddingRight="15px"
        bg="warmGray.200"
      >
        <HeaderComponnet />
        <HomeComponent />
        <FooterComponent />
      </VStack>
    </NativeBaseProvider>
  );
}
