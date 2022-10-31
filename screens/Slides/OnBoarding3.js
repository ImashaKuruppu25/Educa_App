import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";

const OnBoarding3 = () => {
  return (
    <View>
      <View style={styles.topImg}>
        <Image
          source={assets.OnBoarding3}
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
        <Image source={assets.Slider3} />
      </View>
      <View style={styles.slider}>
        <Pressable style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Let’s Make a Journey</Text>
        </Pressable>
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
  nextButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: COLORS.primary,
    width: 285,
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: SIZES.font,
  },
});

export default OnBoarding3;
