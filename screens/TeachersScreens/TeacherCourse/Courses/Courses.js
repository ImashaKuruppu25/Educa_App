import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { assets } from "../../../../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Materialicons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import AnimatedLoader from "react-native-animated-loader";
import axios from "axios";

const DATA = [
  {
    id: 1,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 2,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 3,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 4,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 5,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 6,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 7,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 8,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 9,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
  {
    id: 10,
    subject: "Biology",
    title: "Respiratory System",
    numberOfChapters: "12",
    time: "5h 35m",
    students: 24,
  },
];

export const Courses = (props) => {
  const navigation = useNavigation();
  const deleteCourse = async (id) => {
    await axios
      .delete(`https://uee-b.herokuapp.com/teacher/deleteCourse/${id}`)
      .then(props.setDeleted(true));
  };
  return !props.isLoaded ? (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={{ width: 100, height: 100 }}
      speed={1}
    >
      <Text>Loading...</Text>
    </AnimatedLoader>
  ) : (
    <View style={{ height: "100%", width: "100%" }}>
      <FlatList
        data={props.courses || DATA}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 5, flexDirection: "row", flex: 1 }}>
              <Image
                source={assets.Course}
                style={{
                  width: 120,
                  height: 120,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  left: 7,
                  top: 7,
                  backgroundColor: "white",
                  padding: 5,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#2F80ED" }}>{item.subject}</Text>
              </View>

              <View
                style={{ flexDirection: "column", paddingLeft: 5, flex: 2 }}
              >
                <Text>{item.title}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text>{item.numberOfChapters} Chapters</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name="clock-outline" size={20} />
                    <Text>{item.time}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Materialicons name="group" size={20} />
                  <Text>{item.students} Students</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    borderColor: "gray",
                    borderWidth: 1,
                    marginTop: 10,
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Button
                      onPress={() =>
                        navigation.navigate("TeacherViewCourse", {
                          values: item,
                        })
                      }
                    >
                      <Text style={{ color: "black" }}>View</Text>
                    </Button>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Button
                      onPress={() =>
                        navigation.navigate("TeacherEditCourse", {
                          values: item,
                        })
                      }
                    >
                      <Text style={{ color: "black" }}>Edit</Text>
                    </Button>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Button onPress={() => deleteCourse(item._id)}>
                      <AntDesign name="delete" size={20} />
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
