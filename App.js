import React from "react";
import { NativeBaseProvider } from "native-base";

import MainScreen from "./src/home/main";
import HomeComponentss from "./src/navigationscreens/homescreen";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <MainScreen /> */}
      <HomeComponentss />
    </NativeBaseProvider>
  );
}
