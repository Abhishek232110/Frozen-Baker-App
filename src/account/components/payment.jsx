import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import qr from "../../../assets/homecake/qr.png";
import gpay from "../../../assets/gpay.png";
import phonepe from "../../../assets/phonepay.png";
import debitcard from "../../../assets/debit.png";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function PaymentComponent({ navigation }) {
  const [open, setOpen] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [paymentID, setPaymentID] = useState(null);

  const Payment = ({ title, image }) => {
    return (
      <>
        <TouchableOpacity onPress={() => setEmpty(true)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 10,
              backgroundColor: "#FEFAF6",
              marginTop: 10,
              borderRadius: 7,
            }}
          >
            <Text style={{ fontSize: 16 }}>{title}</Text>
            <Image
              source={image}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
              }}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const UnavilabeService = () => {
    return (
      <View className="w-full flex-row justify-between items-center px-4">
        <Text style={{ color: "red", fontSize: 18 }}>
          Service is not avilabe
        </Text>
        <MaterialIcons
          name="highlight-remove"
          size={24}
          color="red"
          onPress={() => setEmpty(false)}
        />
      </View>
    );
  };

  const transationID = () => {
    if (paymentID) {
      navigation.navigate("Home");
    }
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          marginTop: 3,
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 24, fontStyle: "italic" }}>
          Payment Options
        </Text>
        {empty == true && <UnavilabeService />}
        <View
          style={{
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 16,
            width: "100%",
            borderRadius: 6,
            backgroundColor: "white",
          }}
        >
          <View className="flex-row space-x-1 justify-between items-center">
            <Text style={{ fontSize: 16 }}>GooglePay / BHIM/PhonePe / UPI</Text>
            <View>
              {open == false ? (
                <AntDesign
                  name="down"
                  size={29}
                  color="#E4AC4F"
                  onPress={() => setOpen(true)}
                />
              ) : (
                <AntDesign
                  name="up"
                  size={29}
                  color="#E4AC4F"
                  onPress={() => setOpen(false)}
                />
              )}
            </View>
          </View>
          {open && (
            <View>
              <Payment image={gpay} title="GPay" />
              <Payment image={phonepe} title="PhonePe" />
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Or</Text>
                <TextInput
                  maxLength={40}
                  type="email"
                  onChangeText={() => {}}
                  placeholder="Enter UPI ID: ( Ex. 9663033994@icici )"
                  className="bg-[#FEFAF6] rounded-md pl-2 h-12 text-base w-full mt-2"
                />
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity
          className="flex-row items-center justify-between w-full bg-white  my-2 py-2 rounded-md px-4"
          onPress={() => setEmpty(true)}
        >
          <Text style={{ fontSize: 16 }}>Credit / Debit Card</Text>
          <Image
            source={debitcard}
            style={{
              width: 70,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 20,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Scan QR Code
          </Text>
          <View styl={{}}>
            <Image
              source={qr}
              style={{
                width: 280,
                height: 280,
                alignItems: "center",
              }}
            />
          </View>

          <View className="w-full flex-row justify-between pt-2">
            <Text style={{ fontSize: 16 }}>Enter UPI Transation ID</Text>
          </View>

          <TextInput
            maxLength={40}
            type="email"
            onChangeText={(e) => setPaymentID(e)}
            placeholder="Enter UPI Transation ID"
            className="bg-[#FEFAF6] rounded-md pl-2 h-12 text-base w-full mt-2"
          />
          <TouchableOpacity
            onPress={transationID}
            className="bg-bgColor w-full flex-row justify-center mt-2 py-2 rounded-md"
          >
            <Text style={{ fontSize: 16, color: "white" }}>
              Save Transation ID
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            width: "100%",
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderRadius: 4,
            backgroundColor: "white",
            marginVertical: 20,
          }}
        >
          <Text className="py-2 rounded-md text-white text-base bg-bgColor text-center">
            Cash On Delivary
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
