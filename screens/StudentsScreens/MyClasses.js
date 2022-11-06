import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";

const Item = ({ item, onPress }) => (
  <View onPress={onPress} style={styles.item}>
    <Image source={assets.classListImg} />
    <View style={styles.itemContent}>
      <Text style={styles.headingText}>{item.courseName}</Text>
      <Image source={assets.Slider2} />
      <View style={styles.itemSubHeding}>
        <Text style={styles.subHeadingText}>
          {item.courseChapters.length} Chapter
        </Text>
        <Text>{item.courseDuration}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Discuss</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const MyClasses = ({ route }) => {
  const { courses, name } = route.params;
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.courseId}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
  itemSubHeding: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  itemContent: {
    paddingLeft: 15,
    width: 190,
  },
  headingText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
    marginBottom: 10,
  },
  subHeadingText: {
    color: COLORS.black,
    marginBottom: 10,
    marginTop: 10,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  btnText: {
    fontSize: 16,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 10,
    width: 90,
    alignItems: "center",
  },
});

export default MyClasses;
