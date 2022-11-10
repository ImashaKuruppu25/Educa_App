import { View, Text, Dimensions, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import TeacherNavigation from "../TeacherComponents/Navigation/TeacherNavigation";
import { useNavigation } from "@react-navigation/native";
import { Button, Searchbar } from "react-native-paper";
import { Courses } from "./Courses/Courses";
import axios from "axios";
const height = Dimensions.get("window").height;



const TeacherCourse_screen = ({ route }) => {
  const values = route.params;
  const navigation = useNavigation();
  const [courses, setCourses] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [passingData, setPassingData] = useState([]);
  const [deleted, setDeleted] = useState(true);

  const searchFilter = (searchText, courses) => {
    let arr = courses.filter((course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setPassingData(arr);
  };
  const fetchApi = async () => {
    try {
      let arr = await axios.get(
        "https://uee-b.herokuapp.com/teacher/getCourse"
      );
      setCourses(arr.data);
      setPassingData(arr.data);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (values) {
      fetchApi();
    }
  }, [values]);
  useEffect(() => {
    if (deleted) {
      fetchApi();
      setDeleted(false);
    }
  }, [deleted]);

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
          <Searchbar
            placeholder="Search"
            onChangeText={(newText) => searchFilter(newText, courses)}
          />
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <Courses
          courses={passingData}
          isLoaded={isLoaded}
          setDeleted={setDeleted}
        />
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
