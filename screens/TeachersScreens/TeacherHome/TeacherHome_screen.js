import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import TeacherNavigation from "../TeacherComponents/Navigation/TeacherNavigation";
import LessonProgress from "./LessonProgress/LessonProgress";
import { News } from "./News/News";

const TeacherHome_screen = () => {
  const [name, setName] = useState("Samuel");
  return (
    <View style={styles.container}>
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
          <Searchbar placeholder="Search" />
        </View>
      </View>

      <View style={styles.body}>
        <View style={{ flex: 1.2 }}>
          <LessonProgress />
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
  container: {
    width: "100%",
    minHeight: "100%",
    // backgroundColor: "black",
  },
  header: {
    marginTop: "10%",
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
