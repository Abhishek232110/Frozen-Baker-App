import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AboutProduct from "./aboutProduct";
import { addCart, orderedId, paymentId } from "../../user/userSlice";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductDetails({ route, navigation }) {
  const [productId, setProductId] = useState(" ");
  const [email, setEmail] = useState();

  const { id } = route.params;
  const dispatch = useDispatch();
  let user = { email: email };

  const { loading, users } = useSelector((state) => state?.product);
  const filterData = users.filter((ele) => ele._id === id);
  const CartBuyButton = ({
    buttontitle,
    buttonicon,
    itemData,
    handlPressEvent,
  }) => {
    setProductId(itemData);
    return (
      <>
        <TouchableOpacity
          className=" bg-buttomColor h-12  w-full flex-row items-center justify-center space-x-3 rounded-md"
          onPress={handlPressEvent}
        >
          {buttonicon}
          <Text className="text-white text-base font-semibold ">
            {buttontitle}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  const buyNow = () => {
    dispatch(paymentId(id));
    if (user && user.email) {
      dispatch(orderedId(productId._id));
      navigation.navigate("AddressPage");
    } else {
      navigation.navigate("SignIn");
    }
  };

  const handlPressEvent = () => {
    dispatch(addCart(productId));
    navigation.navigate("cart");
  };

  const CakeData = ({ weight, title }) => {
    return (
      <>
        <View className="flex-row items-center space-x-2">
          <Text className="text-bgColor text-base">{title} :</Text>
          <Text className="text-[#61677A]">{weight}</Text>
        </View>
      </>
    );
  };
  const getData = async () => {
    await AsyncStorage.setItem("paymentId", id);
    const email = await AsyncStorage.getItem("useremail");
    setEmail(email);
  };
  getData();

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          {filterData
            ? filterData?.map((item) => {
                return (
                  <>
                    <View className="flex-col justify-between h-full ">
                      <View className=" p-3 bg-[#F4EDE7]">
                        <Image
                          source={{ uri: item.imageUrl }}
                          className="w-80  h-80 mx-auto rounded-tl-[60] rounded-br-[60]  "
                        />
                      </View>
                      <ScrollView>
                        <View className="flex-1  items-start mx-3 space-y-1 pt-3 border-b border-zinc-400 pb-4">
                          {item.name ? (
                            <View className="flex-row space-x-3">
                              <Text className="text-buttomColor">Name : </Text>
                              <Text className="text-textColor">
                                {item.name}
                              </Text>
                            </View>
                          ) : null}
                          <View className="flex-row items-center space-x-10">
                            <CakeData title="Flavour" weight={item.flavour} />
                            <View className="flex-row items-center justify-start space-x-2">
                              <FontAwesome
                                name="rupee"
                                size={20}
                                color="#61677A"
                              />
                              <Text className="text-base text-[#61677A]">
                                {item.price}
                              </Text>
                            </View>
                          </View>
                          <View className="flex-row items-center  space-x-10 ">
                            <View>
                              <CakeData title="Weight" weight={item.weight} />
                            </View>
                            <View>
                              {item.shape ? (
                                <CakeData title="Shape" weight={item.shape} />
                              ) : null}
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            marginLeft: 15,
                            marginRight: 15,
                            paddingTop: 18,
                          }}
                        >
                          <AboutProduct />
                        </View>
                      </ScrollView>

                      <View className="flex-row justify-between  items-end space-x-1 mx-3 pb-3">
                        <View className="w-[49%] ">
                          <CartBuyButton
                            handlPressEvent={handlPressEvent}
                            buttontitle="Add To Cart"
                            buttonicon={
                              <AntDesign
                                name="shoppingcart"
                                size={24}
                                color="white"
                              />
                            }
                          />
                        </View>
                        <View className="w-[49%] ">
                          <CartBuyButton
                            handlPressEvent={buyNow}
                            itemData={item}
                            buttontitle="Buy Now"
                            buttonicon={
                              <FontAwesome
                                name="money"
                                size={24}
                                color="white"
                              />
                            }
                          />
                        </View>
                      </View>
                    </View>
                  </>
                );
              })
            : null}
        </View>
      )}
    </>
  );
}
