import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import cake from "../../assets/homecake/cake.webp";
import ice from "../../assets/homecake/ice.jpg";
import choco from "../../assets/homecake/choco.jpg";
import pastries from "../../assets/homecake/pastry.jpg";
import { useDispatch, useSelector } from "react-redux";
import { singleItem } from "../user/userSlice";

const NavigationList = ({ navigation }) => {
  const { pastry, icecream, chocolate } = useSelector(
    (state) => state?.product
  );
  const dispatch = useDispatch();
  console.log("pastr", pastry);
  const ProductNavigationButton = ({
    navigation,
    screenname,
    image,
    catogery,
  }) => {
    const handleRenderComponent = () => {
      dispatch(singleItem(catogery));
      navigation.navigate("ItemDetails");
    };

    return (
      <>
        <TouchableOpacity
          className=" rounded-md  px-4 py-2 mb-4 mt-1 space-y-1 items-center justify-center mx-1 bg-[#F4EDE7]"
          onPress={handleRenderComponent}
        >
          <Image
            source={image}
            style={{
              width: 110,
              height: 100,
              borderRadius: 10,
            }}
          />
          <Text>{screenname}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <ScrollView horizontal={true}>
        <ProductNavigationButton
          screenname="Pastries"
          navigation={navigation}
          rendercomponentname="Pastries"
          image={pastries}
          catogery={pastry}
        />
        <ProductNavigationButton
          screenname="Icecreams"
          navigation={navigation}
          rendercomponentname="Icecreams"
          image={ice}
          catogery={icecream}
        />
        <ProductNavigationButton
          screenname="Chocolates"
          navigation={navigation}
          rendercomponentname="Chocolates"
          image={choco}
          catogery={chocolate}
        />
      </ScrollView>
    </>
  );
};

export default NavigationList;
