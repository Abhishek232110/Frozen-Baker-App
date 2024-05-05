import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AboutProduct from "./aboutProduct";

export default function ProductDetails({ route, navigation }) {
  const { id } = route.params;
  const getPastryData = useSelector((state) => state.product?.pastry);
  const filterData = getPastryData.filter((ele) => ele._id === id);
  //   console.log("getdata", filterData);
  const CartBuyButton = ({ buttontitle, buttonicon }) => {
    return (
      <>
        <TouchableOpacity className="bg-buttomColor h-12 w-40 flex-row items-center justify-center space-x-3 rounded-md">
          {buttonicon}
          <Text className="text-white text-base font-semibold ">
            {buttontitle}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <FlatList
        numColumns="2"
        style={{ padding: 10 }}
        data={filterData}
        renderItem={({ item }) => (
          <View className=" mx-auto space-y-10 ">
            <Image source={{ uri: item.imageUrl }} className="w-screen h-52" />
            <View className="flex-1 items-start pl-8 space-y-2 border-b border-zinc-400 pb-5">
              <View className="flex-row items-center justify-start space-x-1">
                <Text className="text-red-400">Flavour :</Text>
                <Text>{item.flavour}</Text>
              </View>
              <View className="flex-row items-center justify-start space-x-2">
                <FontAwesome name="rupee" size={18} color="black" />
                <Text>{item.price}</Text>
              </View>
            </View>
            <View className="px-4 border-b border-zinc-400 pb-5">
              <Text className="text-base">Add Message</Text>
              <TextInput
                placeholder="Enter Any Message"
                className=" border border-zinc-400 rounded-md h-12 px-2 text-base my-2"
              />
            </View>
            <View className=" px-5 w-full">
              <AboutProduct />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                paddingBottom: 30,
              }}
            >
              <CartBuyButton
                buttontitle="Add To Cart"
                buttonicon={
                  <AntDesign name="shoppingcart" size={24} color="white" />
                }
              />
              <CartBuyButton
                buttontitle="Buy Now"
                buttonicon={
                  <FontAwesome name="money" size={24} color="white" />
                }
              />
            </View>
          </View>
        )}
      ></FlatList>
    </>
  );
}
