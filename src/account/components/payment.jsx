// import { View, Text, Image } from "react-native";
// import React from "react";
// import qr from "../../../assets/homecake/qr.png";
// import { AntDesign } from "@expo/vector-icons";

// export default function PaymentComponent() {
//   return (
//     <View
//       style={{
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "90%",
//         marginHorizontal: 20,
//       }}
//     >
//       <Text style={{ fontSize: 40 }}>Payment Options</Text>

//       <View>
//         <View style={{ flexDirection: "row" }}>
//           <Text>GooglePay/ BHIM/PhonePe/ UPI</Text>
//           <AntDesign name="down" size={24} color="black" />
//           <AntDesign name="up" size={24} color="black" />
//         </View>
//         <Text>Credit/Debit Card</Text>
//         <Text>Net Banking</Text>
//       </View>
//       <Image
//         source={qr}
//         style={{
//           width: "10%",
//           height: "10%",
//         }}
//       />
//     </View>
//   );
// }

import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userPaymentApi } from "../../api/apiConfig";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PaymentComponent = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const data = {
    name: "abhi",
    amount: 10,
    phone: 123444,
    MID: "MID" + Date.now(),
    transtionId: "T" + Date.now(),
  };
  const pyment = async () => {
    const response = await fetch(userPaymentApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    if (response.ok) {
      navigation.navigate("Home");
    }
  };
  return (
    <ScrollView>
      <View className="px-8">
        <View className="flex-col space-y-10">
          <View>
            <Text className="text-base pb-2">Name</Text>
            <TextInput
              maxLength={30}
              onChangeText={(e) => setName(e)}
              className="bg-zinc-200 h-14 rounded-md pl-2 text-base"
            />
          </View>
          <View>
            <Text className="text-base pb-2">Enter your number</Text>
            <TextInput
              maxLength={30}
              keyboardType="number-pad"
              onChangeText={(e) => setPhone(e)}
              className="bg-zinc-200 h-14 rounded-md pl-2 text-base"
            />
          </View>
          <View>
            <Text className="text-base pb-2">Enter Amount</Text>
            <TextInput
              maxLength={30}
              keyboardType="numeric"
              onChangeText={(e) => setAmount(e)}
              className="bg-zinc-200 h-14 rounded-md pl-2 text-base"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={pyment}
              className="bg-buttomColor h-14 flex-row justify-center items-center rounded-md"
            >
              <Text className="text-base text-white">Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentComponent;
