import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "native-base";
import axios from "axios";

const Icecream = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const result = axios.get("https://fakestoreapi.com/products/1");
    return result;
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Icecream</Text>
      {/* <Button onPress={() => setData(data + 1)}>Increase by 1</Button> */}
      <Text>dlk</Text>
      <Text>{data?.title}</Text>
    </View>
  );
};

export default Icecream;
