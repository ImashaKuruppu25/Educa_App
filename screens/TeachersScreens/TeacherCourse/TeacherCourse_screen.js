import { View, Text, Dimensions, StatusBar } from "react-native";
import React, { useEffect } from "react";
import TeacherNavigation from "../TeacherComponents/Navigation/TeacherNavigation";
import { useNavigation } from "@react-navigation/native";
import { Button, Searchbar } from "react-native-paper";
import { Courses } from "./Courses/Courses";

const height = Dimensions.get("window").height;

const TeacherCourse_screen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flexDirection: "column",
        height: height,
        width: "100%",
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            marginTop: "1%",
          }}
        >
          <Searchbar placeholder="Search" />
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <Courses />
      </View>
      <View style={{ flex: 0.6 }}>
        <Button
          style={{ backgroundColor: "#2F80ED", height: "100%", padding: 5 }}
          onPress={() => navigation.navigate("TeacherAddCourse")}
        >
          <Text style={{ color: "white" }}>Add New Course</Text>
        </Button>
      </View>
      <View style={{ flex: 0.5 }}>
        <TeacherNavigation />
      </View>
    </View>
  );
};

export default TeacherCourse_screen;
