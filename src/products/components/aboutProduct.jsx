import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AboutProduct = () => {
  const [open, setOpen] = useState(false);
  console.log("open", open);
  const ReUseCompo = ({ firsticon, title }) => {
    return (
      <>
        <TouchableOpacity
          style={{ marginBottom: 8, marginTop: 8 }}
          onPress={() => setOpen(true)}
        >
          <View className="flex-row justify-between  items-center h-12 border border-zinc-400 rounded-md px-2">
            <View className="flex-row justify-start items-center space-x-2">
              <View className="bg-zinc-200 p-1 rounded-md">{firsticon}</View>
              <Text className="text-base text-[#61677A]">{title}</Text>
            </View>
            <AntDesign name="pluscircleo" size={20} color="#FEB941" />
          </View>
        </TouchableOpacity>
      </>
    );
  };
  const ProductDescription = () => {
    return (
      <>
        <View className="mt-2 my-4 px-2 ">
          <View className="flex-row justify-between pb-2">
            <Text className="text-lg text-bgColor">Details of Product</Text>
            <AntDesign
              name="closecircleo"
              size={20}
              color="#E4AC4F"
              onPress={() => setOpen(false)}
            />
          </View>
          <View>
            <Text className="text-lg text-bgColor">Ingredients: </Text>
            <Text className="text-[#61677A]">
              Vanilla premix, Refined oil, Breakfast Sugar, Whip topping cream,
              Dark Chocolate compound, White Chocolate Compound, ButterScotch
              Crush, Caramel Filling, ButterScotch Nuts, ButterScotch Essence,
              Color Yellow, Color Orange
            </Text>
          </View>
          <View>
            <Text className="text-lg text-bgColor">Please Note:</Text>
            <Text className="text-[#61677A]">
              The cake stand, cutlery & accessories used in the image are only
              for representation purposes. They are not delivered with the cake.
              This cake is hand delivered in a good quality cardboard box..
            </Text>
          </View>
          <Text className="text-[#61677A]">
            Handpicked 12 aqua roses in pink tone to delight the special
            someone. Show your emotions with roses, beautifully arranged in
            bouquet style and sprinkled with Green Color Murraya Leaf Filler.
            These beautiful flowers will brighten up the receiver's day. The
            heavenly taste of the chocolate cream cake will elevate the
            experience of joy.
          </Text>
        </View>
      </>
    );
  };
  return (
    <View>
      <View className="mt-3">
        <Text className="mt-3 mb-1 text-base text-[#61677A]">
          About the Product
        </Text>

        <ReUseCompo
          firsticon={<AntDesign name="profile" size={24} color="#FEB941" />}
          title="Product Description"
        />

        <ReUseCompo
          firsticon={
            <SimpleLineIcons name="book-open" size={24} color="#FEB941" />
          }
          title="Care Instruction"
        />

        <ReUseCompo
          firsticon={
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={24}
              color="#FEB941"
            />
          }
          title="Delivary Information"
        />
        {open && <ProductDescription />}
      </View>
    </View>
  );
};

export default AboutProduct;
