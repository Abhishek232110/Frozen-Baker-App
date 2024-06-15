import loginimg from "../../assets/login.png";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserApi } from "../api/apiConfig";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegisterUser = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const values = await AsyncStorage.getItem("useremail");
    console.log("value", values);
  };
  getData();
  const registerUser = async () => {
    const response = await fetch(createUserApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      const result = await response.json();
      let username = result.data.name;
      let useremail = result.data.email;
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("useremail", useremail);
    }
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View className="px-8">
        <View className="flex-col space-y-10">
          <Image source={loginimg} alt="loginImage" className="h-40 w-full" />
          <View>
            <Text className="text-base pb-2">Name</Text>
            <TextInput
              maxLength={30}
              type="text"
              onChangeText={(e) => setName(e)}
              className="bg-zinc-200 h-14 rounded-md pl-2 text-base"
            />
          </View>
          <View>
            <Text className="text-base pb-2">Email ID</Text>
            <TextInput
              maxLength={30}
              keyboardType="email-address"
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
              onPress={registerUser}
              className="bg-buttomColor h-14 flex-row justify-center items-center rounded-md"
            >
              <Text className="text-base text-white">SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterUser;
