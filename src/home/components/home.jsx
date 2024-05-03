import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import bgimg from "../../../assets/cake1.jpg";

const HomeComponent = ({ navigation }) => {
  const { user, loading } = useSelector((state) => state?.users);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <>
      <ScrollView className="p-3">
        {user?.map((ele) => {
          return (
            <>
              <TouchableOpacity
                className="border my-3 rounded-md p-2 flex-row items-center"
                onPress={() => navigation.navigate("Home")}
              >
                <Image
                  source={{ uri: ele.image }}
                  style={{ width: 100, height: 100 }}
                />
                <View>
                  <Text>{ele.category}</Text>
                  <Text>{ele.title}</Text>
                  <Text>{ele.price}</Text>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </>
  );
};

export default HomeComponent;
