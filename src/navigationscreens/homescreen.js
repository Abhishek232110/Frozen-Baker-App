import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base";
import MainScreen from "../home/main";

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      paddingLeft="10"
      paddingRight="10"
      padding="5"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>click for Profile Screen</Text>
      <Button title="Go to Profile" onPress={() => navigate("Profile")} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>click for home Screen</Text>
      <MyBackButton />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const HomeComponentss = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeComponentss;
