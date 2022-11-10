import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import TeacherNavigation from "../TeacherComponents/Navigation/TeacherNavigation";
import LessonProgress from "./LessonProgress/LessonProgress";
import { News } from "./News/News";

const TeacherHome_screen = () => {
  const [name, setName] = useState("Samuel");
  const [searchText, setSearchText] = useState("Samuel");
  const height = Dimensions.get("window").height;
  return (
    <View
      style={{
        height: height,
        width: "100%",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.topic}>Hi, {name}</Text>
            <Text style={styles.description}>
              What do you want to teach today?
            </Text>
          </View>
          <View>
            <Icon
              name="bell"
              size={30}
              style={{ paddingRight: 5, paddingTop: 5 }}
              onPress={() => setName("Nimal")}
            />
          </View>
        </View>
        <View style={styles.headerBottom}>
          <Searchbar
            placeholder="Search"
            onChangeText={(newText) => setSearchText(newText)}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={{ flex: 1.2 }}>
          <LessonProgress searchText={searchText} />
        </View>
        <View style={{ flex: 2 }}>
          <News />
        </View>
      </View>
      <View style={styles.footer}>
        <TeacherNavigation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // marginTop: "10%",
    marginBottom: 5,
    flex: 1,
    flexDirection: "column",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBottom: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginTop: "1%",
  },
  body: {
    flex: 5,
    flexDirection: "column",
  },
  footer: {
    flex: 0.3,
  },
  topic: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  description: {
    fontSize: 15,
    paddingLeft: 5,
    color: "grey",
  },
  searchField: {
    // backgroundColor: "#E0E0E0",
    // flexDirection: "row",
    marginTop: "1%",
    paddingLeft: 5,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  searchIcon: { marginRight: 10 },
  searchText: {},
});

export default TeacherHome_screen;
