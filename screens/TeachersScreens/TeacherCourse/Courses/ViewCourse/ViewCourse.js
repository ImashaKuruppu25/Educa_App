import React from "react";
import { assets } from "../../../../../constants";
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  Pressable,
} from "react-native";
import Antdesign from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Lesson } from "./Lessons/Lesson";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const ViewCourse = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        height: height,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ zIndex: -1 }}>
          <Image
            source={assets.lessonprogressT}
            style={{
              width: width,
              height: 250,
            }}
          />
          <Pressable
            style={{
              backgroundColor: "white",
              position: "absolute",
              top: 5,
              left: 5,
              borderRadius: 100,
              padding: 5,
            }}
            onPress={() => navigate.navigate("TeacherCourse")}
          >
            <Antdesign name="arrowleft" size={20} />
          </Pressable>
        </View>
        <View
          style={{
            zIndex: 1,
            top: -70,
            backgroundColor: "white",
            height: 500,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
          }}
        >
          <View style={{ paddingTop: 50, paddingLeft: 10, width: 250 }}>
            <Text>High School Algebra I: Help and Review</Text>
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingTop: 5,
              paddingRight: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Mathematics</Text>
            <Text>10 Chapter</Text>
          </View>
          <View
            style={{ paddingLeft: 10, paddingTop: 5, flexDirection: "column" }}
          >
            <Text>Description</Text>
            <Text style={{ width: "98%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              dolor etiam sed ante donec quis sapien. Malesuada rhoncus nullam
              eleifend lorem egestas mauris massa massa
            </Text>
          </View>
          <View style={{ height: "60%" }}>
            <Lesson />
          </View>
        </View>
      </View>
      <View
        style={{
          marginBottom: 10,
          // backgroundColor: "#2F80ED",
          padding: 10,
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <Button
          mode="contained"
          style={{ backgroundColor: "#2F80ED", padding: 5 }}
          onPress={() => navigate.navigate("TeacherSaveChanges")}
        >
          <Text style={{ color: "white" }}>Edit course</Text>
        </Button>
      </View>
    </View>
  );
};
export default ViewCourse;
