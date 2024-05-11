import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
export default function FooterComponent({ navigation }) {
  const ButtonCom = ({ navigationTitle, title, titleIcon }) => {
    return (
      <>
        <View className="flex-col items-center rounded-md">
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationTitle)}
          >
            {titleIcon}
          </TouchableOpacity>
          <Text className="text-[#61677A]">{title}</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <View className="flex-row justify-between px-5   pt-4 pb-2  items-center bg-[#F1EFEF]">
        <ButtonCom
          navigationTitle="Home"
          title="Home"
          titleIcon={<AntDesign name="home" size={25} color="#e7a42f" />}
        />
        <ButtonCom
          navigationTitle="Products"
          title="Products"
          titleIcon={
            <Ionicons name="storefront-outline" size={25} color="#61677A" />
          }
        />
        <ButtonCom
          navigationTitle="Account"
          titleIcon={
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="#61677A"
            />
          }
          title="Account"
        />
      </View>
    </>
  );
}
