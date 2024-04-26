import React from "react";
import { NativeBaseProvider } from "native-base";

import HomeComponentss from "./src/navigationscreens/homescreen";
import Icecream from "./src/products/components/icecream";
import MainScreen from "./src/home/main";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeComponentss />
    </NativeBaseProvider>
  );
}
