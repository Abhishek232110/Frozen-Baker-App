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
          onChangeText={(e) => handleInputChange("name", e)}
          value={formData.name}
          placeholder="Enter name.."
        />
        <TextInput
          className={className}
          onChangeText={(e) => handleInputChange("email", e)}
          value={formData.email}
          placeholder="Enter email.."
        />
        <TextInput
          className={className}
          onChangeText={(e) => handleInputChange("number", e)}
          value={formData.number}
          placeholder="Enter number.."
        />
        <TextInput
          className={className}
          onChangeText={(e) => handleInputChange("pincode", e)}
          value={formData.pincode}
          placeholder="Enter pincode.."
        />
        <TextInput
          className={className}
          onChangeText={(e) => handleInputChange("city", e)}
          value={formData.city}
          placeholder="Enter city.."
        />
        <TextInput
          className={className}
          onChangeText={(e) => handleInputChange("address", e)}
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
