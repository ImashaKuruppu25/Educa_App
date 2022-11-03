import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";


const PrimaryBtn = (prop) => {
  
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{prop.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: COLORS.primary,
    width: 285,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.font,
  },
});

export default PrimaryBtn;
