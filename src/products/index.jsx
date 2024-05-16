import { useSelector } from "react-redux";
import { View } from "react-native";
import AllProductItems from "./components/allProducts";

const ProductComponent = ({ navigation }) => {
  const { users, loading } = useSelector((state) => state?.product);

  return (
    <>
      <View className="px-3">
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
