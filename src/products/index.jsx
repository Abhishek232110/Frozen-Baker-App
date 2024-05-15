import { useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import AllProductItems from "./components/allProducts";

const ProductComponent = ({ navigation }) => {
  const { users, loading } = useSelector((state) => state?.product);

  const ProductNavigationButton = ({
    navigation,
    screenname,
    rendercomponentname,
  }) => {
    const handleRenderComponent = () => {
      navigation.navigate(rendercomponentname);
    };

    return (
      <>
        <TouchableOpacity
          className="w-36 h-12 border-zinc-400 border rounded-md items-center justify-center"
          onPress={handleRenderComponent}
        >
          <Text>{screenname}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <View className="px-3">
        <View className="flex-row justify-between py-2 px-1">
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
        <View className="flex-row justify-between px-1">
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
        <AllProductItems
          filterData={users}
          loading={loading}
          navigation={navigation}
        />
      </View>
    </>
  );
};

export default ProductComponent;
