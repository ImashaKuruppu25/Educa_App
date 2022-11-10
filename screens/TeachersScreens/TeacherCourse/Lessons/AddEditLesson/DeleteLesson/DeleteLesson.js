import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
// import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const DATA = [
  {
    id: 1,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 2,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 3,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 4,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 5,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 6,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 7,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 8,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 9,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 10,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 11,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 12,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 13,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 14,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 15,
    lessonName: "Basic Arithmetic",
  },
];

export const DeleteLesson = (props) => {
  const deleteLesson = async (id) => {
    await axios
      .delete(`https://uee-b.herokuapp.com/teacher/deleteLesson/${id}`)
      .then(props.isDeleted(true));
  };
  return (
    <View
      style={{
        marginLeft: 10,
        marginTop: 10,
        marginLeft: 10,
        height: "100%",
      }}
    >
      <FlatList
        data={props.lessons}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                deleteLesson(item._id);
              }}
            >
              <Text> Lesson</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  borderLeftWidth: 3,
                  borderColor: "#2F80ED",
                  padding: 10,
                }}
              >
                <Text>{item.lessonName}</Text>
                <AntDesign name="delete" size={20} />
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};
