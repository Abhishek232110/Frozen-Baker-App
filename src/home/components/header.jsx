import { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import AllProductItems from "../../products/components/allProducts";
import SearchItem from "./searchItem";
import { useSelector } from "react-redux";
import HomeComponent from "./home";

export default function HeaderComponnet({ navigation }) {
  const [filterData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const { users, loading } = useSelector((state) => state?.product);
  useEffect(() => {
    setFilteredData(users ? users : []);
  }, [users]);

  const onQuery = (incomingQuery) => {
    setQuery(incomingQuery);
    const filterRes = users.filter((item) =>
      item.flavour.toLowerCase().includes(incomingQuery.toLowerCase())
    );

    if (filterRes) {
      setFilteredData(filterRes);
    }
  };
  return (
    <>
      <View className="mt-10  px-5 pb-2">
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={() => navigation.navigate("DelivaryLoaction")}
            className="flex-row items-center space-x-3  "
          >
            <Octicons name="location" size={27} color="#FEB941" />
            <View>
              <Text className="font-medium text-[#61677A]">
                Where to deliver ?
              </Text>
              <Text className="text-[#FEB941]">Location Messing</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("cart")}
            className="flex-row  w-9"
          >
            <View>
              <AntDesign name="shoppingcart" size={27} color="#FEB941" />
            </View>
          </TouchableOpacity>
        </View>
        <SearchItem onQuery={onQuery} />
      </View>

      {query ? (
        <AllProductItems
          filterData={filterData}
          loading={loading}
          navigation={navigation}
        />
      ) : (
        <HomeComponent navigation={navigation} />
      )}
    </>
  );
}
