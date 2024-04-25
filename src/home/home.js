import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import FooterComponent from "./footer";
export default function HomeComponent() {
  return (
    <>
      <NativeBaseProvider>
        <HStack>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
        </HStack>
      </NativeBaseProvider>
    </>
  );
}
