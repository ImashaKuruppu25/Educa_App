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
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item, borderColor, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, borderColor]}>
    <Text style={[styles.title, textColor]}>{item.subjectName}</Text>
  </TouchableOpacity>
);

const CourseOption_screen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  //get the subjects from param
  const { subjectList } = route.params;

  //render Subjects to the flat list
  const renderItem = ({ item }) => {
    const borderColor =
      item.subjectId  === selectedId ? COLORS.primary : COLORS.lightGray;
    const color = item.subjectId === selectedId ? COLORS.primary : COLORS.black;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.subjectId)}
        borderColor={{ borderColor }}
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
          Choose The Lesson You Want to Learn
        </Text>
      </View>
      <View style={styles.classContainer}>
        <FlatList
          data={subjectList}
          renderItem={renderItem}
          keyExtractor={(item) => item.subjectId}
          extraData={selectedId}
        />
        <Pressable style={{ marginTop: 25 }}>
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

export default CourseOption_screen;
