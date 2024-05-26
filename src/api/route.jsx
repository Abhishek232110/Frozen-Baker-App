import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../home/main";
import LoginUser from "../user/login";
import CartItems from "../home/components/cartItems";
import RegisterUser from "../user/register";
import AccountScreen from "../account";
import PersonalInfoComponent from "../account/components/personalInfo";
import SavedAddressComponent from "../account/components/saveAddresses";
import ProductComponent from "../products";
import PrivacyPolicy from "../account/components/privacyPolicy";
import { View } from "react-native";
import ProductDetails from "../products/components/productDetails";
import DelivaryLocation from "../account/components/delivaryLocation";
import WishList from "../account/components/wishlish";
import AllProductItems from "../products/components/allProducts";
import BuyNowProduct from "../user/components/buyNow";
import SplashScreen from "../splashScreen";
import { useEffect, useLayoutEffect, useState } from "react";
import AddressPage from "../delivary/components/delivaryDetails";
import ItemDetails from "../products/components/itemDetails";
import MyOrderComponent from "../account/components/myOrder";
import Reminders from "../account/components/reminders";
import ChatWithUs from "../account/components/chatWithUs";

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SignIn" component={LoginUser} />
        <Stack.Screen name="SignUp" component={RegisterUser} />
        <Stack.Screen name="cart" component={CartItems} />
        <Stack.Screen name="buynow" component={BuyNowProduct} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Products" component={ProductComponent} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="Privacy/Policy" component={PrivacyPolicy} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="GetAllProduct" component={AllProductItems} />
        <Stack.Screen name="DelivaryLoaction" component={DelivaryLocation} />
        <Stack.Screen name="AddressPage" component={AddressPage} />
        <Stack.Screen name="Wishlist" component={WishList} />
        <Stack.Screen name="MyOrder" component={MyOrderComponent} />
        <Stack.Screen name="Reminder" component={Reminders} />
        <Stack.Screen name="ChatWith" component={ChatWithUs} />
        <Stack.Screen
          name="Personal Information"
          component={PersonalInfoComponent}
        />
        <Stack.Screen
          name="Saved Addresses"
          component={SavedAddressComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;

function HomeScreen({ navigation }) {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  const navigater = useNavigation();
  useLayoutEffect(() => {
    navigater.setOptions({
      headerShown: false,
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <View className="flex-1  bg-[#FFFFFF] ">
      {isSplashScreen ? (
        <SplashScreen />
      ) : (
        <MainScreen navigation={navigation} />
      )}
    </View>
  );
}
