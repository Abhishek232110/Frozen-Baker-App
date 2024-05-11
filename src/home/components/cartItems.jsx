import HomeComponent from "./home";
import { FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

const CartItems = () => {
  const { cart, loading } = useSelector((state) => state?.users);
  console.log("cart", cart);

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <FlatList
            style={{
              paddingLeft: 8,
              paddingRight: 8,
            }}
            numColumns="2"
            data={cart}
            renderItem={({ item }) => (
              <TouchableOpacity className=" my-3 rounded-md mx-auto space-y-1 bg-[#F4EDE7] p-4">
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: 150,
                    height: 130,
                    borderRadius: 5,
                  }}
                />
                <View>
                  {item.name ? (
                    <Text className="w-40 text-textColor">
                      Name:{item.name}
                    </Text>
                  ) : null}
                  <View className="flex-row items-center justify-start space-x-1">
                    <Text className="text-textColor">Flavour :</Text>
                    <Text className="text-textColor">{item.flavour}</Text>
                  </View>
                  <View className="flex-row items-center justify-start space-x-2">
                    <FontAwesome name="rupee" size={18} color="#61677A" />
                    <Text className="text-textColor">{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          ></FlatList>
        </>
      )}
    </>
  );
};

export default CartItems;
