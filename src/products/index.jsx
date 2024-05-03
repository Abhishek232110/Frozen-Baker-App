import React, { useEffect } from "react";
import RenderButton from "../common/Button";
import HomeComponent from "../home/components/home";
import { useDispatch, useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import AllProductItems from "./components/allProducts";

const ProductComponent = ({ navigation }) => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const ProductNavigationButton = ({
    navigation,
    screenname,
    rendercomponentname,
  }) => {
    return (
      <>
        <TouchableOpacity
          className="w-36 h-12 border-zinc-500 border rounded-md items-center justify-center"
          onPress={() => navigation.navigate(rendercomponentname)}
        >
          <Text>{screenname}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <View className="py-3 px-3">
        <View className="flex-row justify-between py-2">
          <ProductNavigationButton
            screenname="Cake"
            navigation={navigation}
            rendercomponentname="Cakes"
          />
          <ProductNavigationButton
            screenname="Pastries"
            navigation={navigation}
            rendercomponentname="Pastries"
          />
        </View>
        <View className="flex-row justify-between py-2">
          <ProductNavigationButton
            screenname="Icecreams"
            navigation={navigation}
            rendercomponentname="Icecreams"
          />
          <ProductNavigationButton
            screenname="Chocolates"
            navigation={navigation}
            rendercomponentname="Chocolates"
          />
        </View>
      </View>
      <AllProductItems />
    </>
  );
};

export default ProductComponent;
