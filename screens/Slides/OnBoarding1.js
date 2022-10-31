import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import PrimaryBtn from "../../components/PrimaryBtn";

const OnBoarding1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.topImg}>
        <Image
          source={assets.OnBoarding1}
          style={{ width: 390, height: 455 }}
        />
      </View>
      <View style={styles.centerText}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus
          mauris pulvinar suspendisse.
        </Text>
      </View>
      <View style={styles.slider}>
        <Image source={assets.Slider1} />
      </View>
      <View style={styles.slider}>
        <Pressable onPress={() => navigation.navigate("OnBoarding2")}>
          <PrimaryBtn name="Next" />
        </Pressable>
        <Text
          style={{ color: COLORS.primary, padding: 25 }}
          onPress={() => navigation.navigate("OnBoarding1")}
        >
          Skip
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topImg: {
    display: "flex",
    alignItems: "center",
  },
  centerText: {
    display: "flex",
    alignItems: "center",
    padding: 35,
    width: 390,
    alignSelf: "center",
  },

  text: {
    textAlign: "center",
    fontSize: SIZES.large,
    fontFamily: FONTS.medium,
  },
  slider: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
});

export default OnBoarding1;
