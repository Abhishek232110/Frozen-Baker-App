import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../assets/frozenlogo.png";
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
      <View className=" h-full flx-col justify-center items-center  bg-white">
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <ImageBackground
            source={splash}
            resizeMode="cover"
            className="h-4/5 w-screen"
          ></ImageBackground>
        </Animated.View>
      </View>
    </>
  );
}
