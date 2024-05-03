import { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import AllProductItems from "../../products/components/allProducts";

export default function HeaderComponnet({ navigation }) {
  const [cart, setCart] = useState(0);
  const onChangeHandle = () => {
    navigation.navigate("cart");
    setCart(cart + 1);
  };
  return (
    <>
      <View className="mt-10 flex-row justify-between px-5 pb-3">
        <TouchableOpacity
          onPress={() => navigation.navigate("DelivaryLoaction")}
          className="flex-row items-center space-x-3 "
        >
          <Octicons name="location" size={27} />
          <View>
            <Text className="font-medium">Where to deliver ?</Text>
            <Text className="text-red-400">Location Messing</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Wishlist")}
          className="flex-row  w-9"
        >
          <View className="absolute">
            <FontAwesome5 name="heart" size={27} color="black" />
          </View>
          <View className="relative left-5 bottom-1">
            <Octicons name="dot-fill" size={22} color="red" />
          </View>
        </TouchableOpacity>
      </View>
      <AllProductItems />
    </>
  );
}
