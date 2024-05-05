import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserLogout = ({ incomingInput }) => {
  console.log("query", incomingInput);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  let user = { name: name, email: email };
  const getData = async () => {
    const name = await AsyncStorage.getItem("username");
    const email = await AsyncStorage.getItem("useremail");
    setName(name);
    setEmail(email);
  };
  getData();
  return (
    <View>
      <Text>UserLogout</Text>
    </View>
  );
};

export default UserLogout;
