import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, assets, SHADOWS, SIZES, FONTS } from "../constants";

const Login_screen = () => {
  return (
    <View>
      <Image source={assets.logo} />
      <Text
        style={{
          color: COLORS.black,
          fontSize: SIZES.extraLarge,
          textAlign: "center",
          fontFamily: FONTS.light,
        }}
      >
        Hi, Let’s Make a Journey with Us
      </Text>
    </View>
  );
};

export default Login_screen;
