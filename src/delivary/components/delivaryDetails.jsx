import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { SaveAddress } from "../../user/userSlice";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function AddressPage() {
  const className = "bg-gray-200 my-2 h-11 px-2 rounded-md w-full ";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pincode: "",
    city: "",
    address: "",
  });
  const [date, setDate] = useState(dayjs());

  const dispatch = useDispatch();
  const handleFormSubmit = () => {
    console.log("Form Data:", formData);
    dispatch(SaveAddress(...formData, date));
  };
  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
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
          onChangeText={(name) => handleInputChange("name", name)}
          value={formData.name}
          placeholder="Enter name.."
        />
        <TextInput
          className={className}
          onChangeText={(email) => handleInputChange("email", email)}
          value={formData.email}
          placeholder="Enter email.."
        />
        <TextInput
          className={className}
          onChangeText={(number) => handleInputChange("number", number)}
          value={formData.number}
          placeholder="Enter number.."
        />
        <TextInput
          className={className}
          onChangeText={(pincode) => handleInputChange("pincode", pincode)}
          value={formData.pincode}
          placeholder="Enter pincode.."
        />
        <TextInput
          className={className}
          onChangeText={(city) => handleInputChange("city", city)}
          value={formData.city}
          placeholder="Enter city.."
        />
        <TextInput
          className={className}
          onChangeText={(address) => handleInputChange("address", address)}
          value={formData.address}
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
