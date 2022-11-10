import React, { useState, useEffect } from "react";
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
import axios from "axios";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const ViewCourse = ({ route }) => {
  const { values } = route.params;
  const navigate = useNavigation();
  const [lesson, setLessons] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const fetchApi = async () => {
    try {
      let arr = await axios.get(
        "https://uee-b.herokuapp.com/teacher/getLesson"
      );
      setLessons(arr.data);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

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
            <Text>{values.title}</Text>
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
            <Text>{values.subject}</Text>
            <Text>{values.progress} Chapter</Text>
          </View>
          <View
            style={{ paddingLeft: 10, paddingTop: 5, flexDirection: "column" }}
          >
            <Text>Description</Text>
            <Text style={{ width: "98%" }}>Why not learn {values.title}?</Text>
          </View>
          <View>
            <Lesson lessons={lesson} isLoaded={isLoaded} />
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
          style={{ backgroundColor: "#2F80ED", padding: 5 }}
          onPress={() =>
            navigate.navigate("TeacherSaveChanges", {
              values: values,
              lessons: lesson,
            })
          }
        >
          <Text style={{ color: "white" }}>Edit course</Text>
        </Button>
      </View>
    </View>
  );
};
export default ViewCourse;
