import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "../home/main";
import { Button, Text, View } from "native-base";
import LoginUser from "../user/login";
import CartItems from "../home/components/cartItems";

const Stack = createNativeStackNavigator();

const HomeComponentss = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="login" component={LoginUser} />
        <Stack.Screen name="cart" component={CartItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeComponentss;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MainScreen navigation={navigation} />
    </View>
  );
}
