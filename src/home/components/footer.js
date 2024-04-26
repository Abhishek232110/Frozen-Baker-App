import {
  Box,
  Button,
  HStack,
  Icon,
  NativeBaseProvider,
  Text,
  VStack,
  View,
} from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FooterComponent({ navigation }) {
  const ButtonCom = ({ navigationTitle, title }) => {
    return (
      <>
        <VStack alignItems="center" style={{ backgroundColor: "white" }}>
          <Button
            colorScheme="white"
            onPress={() => navigation.navigate(navigationTitle)}
          >
            <MaterialCommunityIcons
              name="account-box-outline"
              size={40}
              color="black"
            />
            <Text>{title}</Text>
          </Button>
        </VStack>
      </>
    );
  };
  return (
    <>
      <View>
        <HStack justifyContent="space-between">
          <ButtonCom navigationTitle="Home" title="Home" />
          <ButtonCom navigationTitle="login" title="Products" />
          <ButtonCom navigationTitle="login" title="Home" />
          <ButtonCom navigationTitle="login" title="Account" />
        </HStack>
      </View>
    </>
  );
}
