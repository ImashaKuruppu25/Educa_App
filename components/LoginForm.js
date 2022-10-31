import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading}>Login</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor={COLORS.black}
          // onChangeText={(val) => this.onChangeText("email", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor={COLORS.black}
          // onChangeText={(val) => this.onChangeText("password", val)}
          //   right={<TextInput.Icon icon="eye" />}
        />
        <Text style={styles.forgetPassword}>Forget password</Text>

        <Pressable
          style={styles.submitButton}
          onPress={() => navigation.navigate("OnBoarding1")}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </Pressable>
        <View style={{ alignSelf: "center" }}>
          <Text>
            Don’ have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={styles.loginLink}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    ...SHADOWS.dark,
    borderRadius: 40,
    height: 800,
    marginTop: 30,
  },
  cardHeading: {
    marginTop: 35,
    marginLeft: 24,
    fontFamily: FONTS.medium,
    paddingRight: 2,
    fontSize: SIZES.large,
  },
  input: {
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.font,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    fontFamily: FONTS.regular,
  },
  container: {
    padding: 20,
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    margin: 30,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: COLORS.primary,
    width: 285,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: SIZES.font,
  },
  redioBtnText: {
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
  },
  radioBtnGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },

  loginLink: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
  },
  forgetPassword: {
    color: COLORS.lightGray,
    textAlign: "right",
    fontSize: SIZES.small,
  },
});

export default LoginForm;
