import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, assets, SIZES, FONTS } from "../constants";
import RegisterForm from "../components/RegisterForm";

const Login_screen = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image source={assets.logo} />
      </View>
      <Text style={styles.heading}>Hi, Let’s Make a Journey with Us</Text>
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 100,

  },

  heading: {
    color: COLORS.black,
    fontSize: SIZES.extraLarge,
    textAlign: "center",
    fontFamily: FONTS.regular,
    width: 200,
    alignSelf: "center",
    paddingTop: 40,
    letterSpacing: 1,
    lineHeight:35
  },
});

export default Login_screen;
