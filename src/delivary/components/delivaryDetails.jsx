import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { delivaryId } from "../../user/userSlice";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { uploadAddress } from "../../api/apiConfig";

export default function AddressPage() {
  const dispatch = useDispatch();
  const className = "bg-gray-200 my-2 h-11 px-2 rounded-md w-full ";
  const [date, setDate] = useState(dayjs());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleFormSubmit = async () => {
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
      dispatch(delivaryId(id));
      console.log("response", res._id);
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
        <TextInput
          className={className}
          onChangeText={(name) => setName(name)}
          value={name}
          placeholder="Enter name.."
        />
        <TextInput
          className={className}
          onChangeText={(email) => setEmail(email)}
          value={email}
          placeholder="Enter email.."
        />
        <TextInput
          className={className}
          onChangeText={(number) => setNumber(number)}
          value={number}
          placeholder="Enter number.."
        />
        <TextInput
          className={className}
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
