import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ActivityIndicator } from "react-native";

const AllProductItems = ({ navigation, loading, filterData }) => {
  return (
    <>
      <View className=" px-6 mb-3 flex-row justify-start  items-center space-x-6"></View>
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
              className=" my-1 rounded-md mx-auto space-y-1 bg-[#F4EDE7] p-4 "
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  id: item._id,
                })
              }
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  width: 150,
                  height: 130,
                  borderRadius: 5,
                }}
              />
              <View>
                <View className="flex-row items-center justify-start space-x-1">
                  <Text className="text-buttomColor">Flavour :</Text>
                  <Text className="text-[#61677A]">{item.flavour}</Text>
                </View>

                <View className="flex-row items-center justify-start space-x-2">
                  <FontAwesome name="rupee" size={18} color="#61677A" />
                  <Text className="text-[#61677A]">{item.price}</Text>
                </View>
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
