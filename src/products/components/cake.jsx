import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

const CakeComponent = ({ navigation }) => {
  const { chocolate, loading } = useSelector((state) => state?.product);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const handleNavigation = (_id) => {
    navigation.navigate("Saved Addresses", {
      id: item._id,
    });
  };
  return (
    <>
      <FlatList
        style={{
          paddingLeft: 8,
          paddingRight: 8,
        }}
        numColumns="2"
        data={chocolate}
        renderItem={({ item }) => (
          <TouchableOpacity
            className=" my-3 rounded-md mx-auto space-y-1"
            onPress={() => handleNavigation(item._id)}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 160, height: 150, borderRadius: 5 }}
            />
            <View>
              <View className="flex-row items-center justify-start space-x-1">
                <Text className="text-red-400">Flavour :</Text>
                <Text>{item.flavour}</Text>
              </View>

              <View className="flex-row items-center justify-start space-x-2">
                <FontAwesome name="rupee" size={18} color="black" />
                <Text>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </>
  );
};

export default CakeComponent;
