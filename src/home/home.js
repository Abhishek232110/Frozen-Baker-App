import {
  Box,
  Divider,
  HStack,
  Icon,
  IconButton,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
export default function HomeComponent() {
  return (
    <>
      <NativeBaseProvider>
        <HStack>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
          <Box>HomeComponent</Box>
        </HStack>
      </NativeBaseProvider>
    </>
  );
}
