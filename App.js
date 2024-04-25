import React from "react";
import { Center, Flex, NativeBaseProvider, Spacer, VStack } from "native-base";

import HeaderComponnet from "./src/home/header";
import HomeComponent from "./src/home/home";
import FooterComponent from "./src/home/footer";
import LoginUser from "./src/user/login";
import RegisterUser from "./src/user/register";
import HomeComponentss from "./src/navigationscreens/homescreen";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeComponentss />
      {/* <VStack
        h="full"
        paddingBottom="10px"
        paddingTop="40px"
        paddingLeft="15px"
        paddingRight="15px"
        bg="warmGray.200"
      >
        <HeaderComponnet />
        <FooterComponent />
      </VStack> */}
    </NativeBaseProvider>
  );
}
