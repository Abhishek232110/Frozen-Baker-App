import HomeComponent from "./home";
import { FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

const CartItems = ({ navigation }) => {
  const { cart, loading } = useSelector((state) => state?.users);
  console.log("cart", cart);

  return (
    <>
      <View style={{ marginHorizontal: 4, marginVertical: 4 }}>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <ScrollView>
              {cart.map((item) => {
                return (
                  <>
                    <View className="my-1   rounded-md space-y-2 bg-[#F4EDE7] px-2  py-2 w-full">
                      <View className="flex-row items-start justify-between">
                        <Image
                          source={{ uri: item.imageUrl }}
                          style={{
                            width: 200,
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
                            <Text className="text-textColor text-lg">
                              Flavour :
                            </Text>
                            <Text className="text-textColor">
                              {item.flavour}
                            </Text>
                          </View>
                          <View className="flex-row items-center justify-start space-x-2">
                            <FontAwesome
                              name="rupee"
                              size={18}
                              color="#61677A"
                            />
                            <Text className="text-textColor">{item.price}</Text>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("AddressPage")}
                        style={{
                          width: "auto",
                          backgroundColor: "#E4AC4F",
                          alignItems: "center",
                          padding: 4,
                          borderRadius: 4,
                        }}
                      >
                        <Text className="text-white">Buy Now</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
    </>
  );
};

export default CartItems;
