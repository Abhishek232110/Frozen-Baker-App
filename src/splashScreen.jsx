import {
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../assets/homecake/logo1.webp";
import splash from "../assets/app.png";
import { useEffect, useRef } from "react";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <View className="h-full ">
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <View className="bg-buttomColor h-3/4 w-screen items-center justify-center rounded-bl-full rounded-b-full ">
            <Image
              source={logo}
              resizeMode="cover"
              className="h-96 w-full"
            ></Image>
          </View>
          <View style={{ marginTop: 50, paddingLeft: 30 }}>
            <Text className="text-4xl text-zinc-400 font-semibold px-4">
              A new destination
            </Text>
            <Text className="text-3xl text-zinc-400 font-semibold px-4 mt-3">
              for cake lovers
            </Text>
          </View>
        </Animated.View>
      </View>
    </>
  );
}
