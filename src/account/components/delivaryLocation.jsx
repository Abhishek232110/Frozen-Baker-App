import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Device from "expo-device";
import MapView from "react-native-maps";
import * as Location from "expo-location";

export default function DelivaryLocation() {
  const [location, setLocation] = useState(null);
  console.log("location", location);
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      // setLocation(currentLocation);
    };
    getLocation();
  }, []);

  const findAddress = async () => {
    try {
      const geolocation = await Location.geocodeAsync(address);
      console.log("Geolocation results:", geolocation);
      if (geolocation) {
        geolocation.filter((direc) => setLocation(direc));
      }
    } catch (error) {
      console.error("Error finding geolocation:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your location"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TouchableOpacity style={styles.button} onPress={findAddress}>
        {location?.latitude ? (
          <Text style={styles.buttonText}>Save Address</Text>
        ) : (
          <Text style={styles.buttonText}>Get Address</Text>
        )}
      </TouchableOpacity>
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
      <StatusBar style="auto" />

      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  map: {
    width: "100%",
    height: 300,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 20,
  },
});
