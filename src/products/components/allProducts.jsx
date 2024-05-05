import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchItem from "../../home/components/searchItem";

const AllProductItems = ({ navigation }) => {
  const [filterData, setFilteredData] = useState([]);
  const { users, loading } = useSelector((state) => state?.product);
  useEffect(() => {
    setFilteredData(users ? users : []);
  }, [users]);

  const setOnQueryChange = (inputText) => {
    const filterRes = users.filter((item) =>
      item.flavour.toLowerCase().includes(inputText.toLowerCase())
    );
    console.log("filterRes", filterRes);
    if (filterRes) {
      setFilteredData(filterRes);
    }
  };

  return (
    <>
      <View className=" px-6 mb-3 flex-row justify-start  items-center space-x-6">
        <SearchItem onQuery={setOnQueryChange} />
      </View>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          style={{
            paddingLeft: 8,
            paddingRight: 8,
          }}
          numColumns="2"
          data={filterData}
          renderItem={({ item }) => (
            <TouchableOpacity
              className=" my-3 rounded-md mx-auto space-y-1 "
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  width: 160,
                  height: 150,
                  borderRadius: 5,
                }}
              />
              <View>
                <View className="flex-row items-center justify-start space-x-1">
                  <Text className="text-red-400">Flavour :</Text>
                  <Text>{item.flavour}</Text>
                </View>
                {/* <View className="flex-row items-center justify-start space-x-1">
                <Text className="text-red-400">Weight :</Text>
                <Text>{item.weight}</Text>
              </View> */}
                <View className="flex-row items-center justify-start space-x-2">
                  <FontAwesome name="rupee" size={18} color="black" />
                  <Text>{item.price}</Text>
                </View>
                {/* <View className="flex-row items-center justify-start space-x-1">
                <Text className="text-red-400">Shape :</Text>
                <Text>{item.shape}</Text>
              </View> */}
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "auto",
  },
});
export default AllProductItems;
