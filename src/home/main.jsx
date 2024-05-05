import React, { useEffect, useLayoutEffect } from "react";
import HeaderComponnet from "./components/header";
import FooterComponent from "./components/footer";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { getFakeData, getProducts } from "../user/userSlice";
import {
  getButterScotchData,
  getChocolateData,
  getChocolateDetail,
  getFlowercakeData,
  getFruitData,
  getIcecreamDetails,
  getPastryDetails,
  getPineappleData,
  getProductDetails,
  getRedvelvetData,
  getTruffleData,
  getVanillaData,
} from "../products/productSlice";

const MainScreen = ({ route, navigation }) => {
  // const { id } = route?.params;

  const navigater = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChocolateData());
    dispatch(getFakeData());
    dispatch(getProductDetails());
    dispatch(getButterScotchData());
    dispatch(getFlowercakeData());
    dispatch(getTruffleData());
    dispatch(getRedvelvetData());
    dispatch(getVanillaData());
    dispatch(getFruitData());
    dispatch(getPineappleData());
    dispatch(getPastryDetails());
    dispatch(getIcecreamDetails());
    dispatch(getChocolateDetail());
    dispatch(getProducts());
  }, []);
  useLayoutEffect(() => {
    navigater.setOptions({
      headerShown: false,
    });
  });
  return (
    <View className="flex-1 justify-between  h-screen">
      <HeaderComponnet navigation={navigation} />
      <FooterComponent navigation={navigation} />
    </View>
  );
};

export default MainScreen;
