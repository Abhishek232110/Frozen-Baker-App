import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Slideshow from "react-native-image-slider-show";
import homeImg from "../../../assets/banner2.jpg";
import homeImg1 from "../../../assets/Cake1.webp";
import homeImg2 from "../../../assets/Home.webp";
import homeImg3 from "../../../assets/love.webp";
const dataSource = [
  {
    url: homeImg,
  },
  {
    url: homeImg1,
  },
  {
    url: homeImg2,
  },
  {
    url: homeImg3,
  },
];

const HomeComponent = ({ navigation }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });
  const ImageCompo = () => {
    return <View></View>;
  };
  return (
    <ScrollView>
      <View
        style={{
          height: 280,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Slideshow position={position} dataSource={dataSource} />
      </View>
    </ScrollView>
  );
};

export default HomeComponent;
