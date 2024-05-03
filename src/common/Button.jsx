import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

const RenderButton = ({
  renderscreen,
  rendercomponentname,
  navigation,
  bgColor = "bg-zinc-100 border-b",
  textColor = "text-black",
  rightArrowIcon,
  logoIcon,
}) => {
  return (
    <View>
      <TouchableOpacity
        className={`${bgColor} border-zinc-400 pb-3`}
        onPress={() => navigation.navigate(renderscreen)}
      >
        <View className="flex-row  items-center justify-between w-full">
          <View className="flex-row items-center space-x-3">
            {logoIcon ? logoIcon : null}
            <Text className={`${textColor}`}>{rendercomponentname}</Text>
          </View>
          {rightArrowIcon ? rightArrowIcon : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RenderButton;
