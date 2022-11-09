import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { assets, FONTS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Header = (prop) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.username}>Hi, {prop.username}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("MyRequest")}>
          <Image source={assets.mailIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={assets.bellIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
    alignItems: "flex-end",
  },
  username: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.regular,
  },
});

export default Header;
