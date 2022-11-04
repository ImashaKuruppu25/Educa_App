import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { assets, classes, COLORS, FONTS, SIZES } from "../../constants";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item, borderColor, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, borderColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ClassOption_screen = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  let subjects;

  //get subejct for relavent class
  const getSubjects = () => {
    subjects = classes.find((sub) => sub.id === selectedId);
  };
  getSubjects();

  //render classes to the flat list
  const renderItem = ({ item }) => {
    const borderColor =
      item.id === selectedId ? COLORS.primary : COLORS.lightGray;
    const color = item.id === selectedId ? COLORS.primary : COLORS.black;

    return (
      <Item
        item={item}
        borderColor={{ borderColor }}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
      />
    );
  };

  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          source={assets.classOption}
          style={{ width: 390, height: 241 }}
        />
      </View>
      <View style={styles.overlayTextContainer}>
        <Text style={styles.overlayText}>
          Select The Class You Want To Study
        </Text>
      </View>
      <View style={styles.classContainer}>
        <FlatList
          data={classes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <Pressable
          style={{ marginTop: 25 }}
          onPress={
            subjects
              ? () =>
                  navigation.navigate("CourseOption", {
                    subjectList: subjects.subjects,
                  }) //pass subjects to the next screen
              : null
          }
        >
          <PrimaryBtn name="Next" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    paddingTop: 35,
    alignItems: "center",
  },
  overlayTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayText: {
    fontSize: SIZES.extraLarge,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    width: 240,
    lineHeight: 38,
    textAlign: "center",
  },
  classContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    width: 311,
    marginBottom: 25,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
  },
});

export default ClassOption_screen;
