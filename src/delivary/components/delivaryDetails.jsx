import React, { useState } from "react";

import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { uploadAddress } from "../../api/apiConfig";

export default function AddressPage({ navigation }) {
  const className = "bg-gray-200 my-2 h-11 px-2 rounded-md w-fit";
  const [date, setDate] = useState(dayjs());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleFormSubmit = async () => {
    if (name.length > 2 && email.length > 15 && number.length > 8)
      try {
        const result = await fetch(uploadAddress, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            pincode,
            address,
            city,
            number,
            date,
          }),
        });
        const res = await result.json();
        const id = res._id;

        {
          id && navigation.navigate("Payment");
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <ScrollView>
      <View className="flex-col px-5 space-y-4">
        <Text className="text-lg mt-4 mb-3 text-center">
          Enter Delivary Details
        </Text>
        <DateTimePicker
          mode="single"
          date={date}
          onChange={(params) => setDate(params.date)}
        />
        <View>
          <Text>Name</Text>
          <TextInput
            className={className}
            onChangeText={(name) => setName(name)}
            value={name}
            placeholder="Enter name.."
          />
        </View>
        <TextInput
          className={className}
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
          value={email}
          placeholder="Enter email.."
        />
        <TextInput
          className={className}
          keyboardType="number-pad"
          onChangeText={(number) => setNumber(number)}
          value={number}
          placeholder="Enter number.."
        />
        <TextInput
          className={className}
          keyboardType="number-pad"
          onChangeText={(pincode) => setPincode(pincode)}
          value={pincode}
          placeholder="Enter pincode.."
        />
        <TextInput
          className={className}
          onChangeText={(city) => setCity(city)}
          value={city}
          placeholder="Enter city.."
        />
        <TextInput
          className={className}
          onChangeText={(address) => setAddress(address)}
          value={address}
          placeholder="Enter address.."
        />
        <TouchableOpacity
          onPress={handleFormSubmit}
          className="w-full bg-bgColor items-center justify-center h-11 rounded-md my-5"
        >
          <Text className="text-white  text-base ">SaveAddress</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
