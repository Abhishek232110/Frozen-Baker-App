import { useState } from "react";

import loginimg from "../../assets/login.png";
// import loginimg from "../../assets/loginimage.jpg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../api/apiConfig";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const getData = async () => {
    const values = await AsyncStorage.getItem("useremail");
    console.log("value", values);
  };
  getData();
  const handleButtonClick = async () => {
    const response = await fetch(loginUserApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const result = await response.json();
      if (result) {
        navigation.navigate("Home");
      }
      let username = result.data.name;
      let useremail = result.data.email;
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("useremail", useremail);
      return result;
    }
  };

  return (
    <ScrollView>
      <View className="px-8">
        <View className="flex-col space-y-10">
          <Image source={loginimg} alt="loginImage" className="h-40 w-full" />
          <View>
            <Text className="text-base pb-2">Email ID</Text>
            <TextInput
              maxLength={30}
              type="email"
              onChangeText={(e) => setEmail(e)}
              className="bg-zinc-200 h-14 rounded-md pl-2 text-base"
            />
          </View>
          <View>
            <Text className="text-base pb-2">Password</Text>
            <TextInput
              maxLength={30}
              type="password"
              secureTextEntry={true}
              onChangeText={(e) => setPassword(e)}
              className="bg-zinc-200 h-14 rounded-md pl-2 text-base"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={handleButtonClick}
              className="bg-indigo-500 h-14 flex-row justify-center items-center rounded-md"
            >
              <Text className="text-base text-white">SIGNIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row justify-end ml-auto mt-3"
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text className="border-b text-base text-indigo-600">SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginUser;
