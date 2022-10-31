import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, assets, SIZES, FONTS } from "../constants";
import React from "react";
import LoginForm from "../components/LoginForm";

const Login_screen = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image source={assets.logo} />
      </View>
      <Text style={styles.heading}>Welcome Back, Imasha Kuruppu</Text>
      <LoginForm />
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
    paddingTop: 100,
    letterSpacing: 1,
    lineHeight: 35,
  },
});

export default Login_screen;
