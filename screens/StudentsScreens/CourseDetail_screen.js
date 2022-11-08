import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import PrimaryBtn from "../../components/PrimaryBtn";

const Item = ({ item }) => (
  <View style={{ marginTop: 15 }}>
    <Text style={styles.item}>{item.chapterName}</Text>
    <Text style={styles.subitem}>{item.chapterContent}</Text>
  </View>
);

const CourseDetail_screen = ({ route }) => {
  const { course, name } = route.params;

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.extraLarge,
            textAlign: "center",
            color: COLORS.primary,
          }}
        >
          {course.courseName}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            color: COLORS.lightGray,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Image source={assets.Slider2} />
          <Text>5/3</Text>
        </View>
        <View style={styles.discription}>
          <Text style={styles.subHeding}>Indroduction</Text>
          <Text style={{ fontSize: SIZES.font, lineHeight: 20 }}>
            {course.courseDescription}
          </Text>

          <View>
            <Text style={styles.subHeding}>Sylabus</Text>
          </View>

          <View>
            <FlatList
              data={course.courseChapters}
              renderItem={renderItem}
              keyExtractor={(item) => item.chapterId}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <PrimaryBtn name="Buy Full Course" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  courseImg: {
    alignItems: "center",
    marginTop: 45,
    backgroundColor: COLORS.primary,
  },
  courseContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    // top: 250,
    width: 390,
    height: 1000,
    padding: 10,
  },
  courseName: {
    marginTop: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  discription: {
    padding: 10,
    marginTop: 5,
  },
  subHeding: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    marginBottom: 8,
    marginTop: 28,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
  infoIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    color: COLORS.primary,
    marginLeft: 12,
  },
  item: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
  },
  subitem: {
    color: COLORS.lightGray,
  },
});

export default CourseDetail_screen;
