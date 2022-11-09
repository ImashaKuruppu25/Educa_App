import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => (
  <View style={{ marginTop: 15 }}>
    <Text style={styles.item}>{item.chapterName}</Text>
  </View>
);

const Course_screen = ({ route }) => {
  const navigation = useNavigation();
  const { singleCourse, name } = route.params;

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View>
      <View style={styles.courseImg}>
        <Image source={assets.SingleCourse} />
      </View>
      <View style={styles.courseContainer}>
        <View style={styles.courseName}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large }}>
            {singleCourse.courseName}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.font,
              color: COLORS.lightGray,
            }}
          >
            {name}
          </Text>
        </View>
        <View style={styles.discription}>
          <Text style={styles.subHeding}>Description</Text>
          <Text style={{ fontSize: SIZES.font, lineHeight: 20 }}>
            {singleCourse.courseDescription}
          </Text>
          <Text style={styles.subHeding}>Information</Text>
          <View style={styles.info}>
            <View style={styles.infoIcon}>
              <Icon name="clock-o" color={COLORS.primary} size={SIZES.large} />
              <Text style={styles.iconText}>{singleCourse.courseDuration}</Text>
            </View>
            <View style={styles.infoIcon}>
              <Icon name="book" color={COLORS.primary} size={SIZES.large} />
              <Text style={styles.iconText}>
                {singleCourse.courseChapters.length} Chapters
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.subHeding}>Sylabus</Text>
            <Text style={styles.subHeding}>Introduction</Text>
            <Text style={{ fontSize: SIZES.font, lineHeight: 20 }}>
              {singleCourse.courseDescription}
            </Text>
          </View>

          <View>
            <FlatList
              data={singleCourse.courseChapters}
              renderItem={renderItem}
              keyExtractor={(item) => item.chapterId}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  course: singleCourse,
                  name: name,
                })
              }
            >
              <PrimaryBtn name="Start Course" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 159,
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
});
export default Course_screen;
