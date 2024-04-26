import React from "react";
import { NativeBaseProvider, Text, VStack } from "native-base";
import HeaderComponnet from "./components/header";
import FooterComponent from "./components/footer";

const MainScreen = ({ navigation }) => {
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
        <HeaderComponnet navigation={navigation} />
        <FooterComponent navigation={navigation} />
      </VStack>
    </NativeBaseProvider>
  );
};

export default MainScreen;
