import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { RadioButton } from "react-native-paper";
import { Linking } from "react-native";

const RegisterForm = () => {
  const [checked, setChecked] = useState("first");

  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading}>Register</Text>
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
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor={COLORS.black}
          // onChangeText={(val) => this.onChangeText("phone_number", val)}
        />
        <Text style={styles.redioBtnText}>Register As a?</Text>
        <View style={styles.radioBtnGroup}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
            color={COLORS.primary}
          />
          <Text>Student</Text>
          <View style={{ marginLeft: 40 }}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
          </View>

          <Text>Teacher</Text>
        </View>

        <Pressable style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Register</Text>
        </Pressable>
        <View style={{ alignSelf: "center" }}>
          <Text>
            Have an account?{" "}
            <Text
              onPress={() => Linking.openURL("http://google.com")}
              style={styles.loginLink}
            >
              Login
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
});
export default RegisterForm;
