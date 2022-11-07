import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

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
    id: 11,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 21,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 31,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 41,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 51,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 112,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 22,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 32,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 42,
    lessonName: "Basic Arithmetic",
  },
  {
    id: 52,
    lessonName: "Basic Arithmetic",
  },
];

export const Lesson = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginLeft: 10,
        marginTop: 10,
        marginLeft: 10,
        height: "100%",
      }}
    >
      <Text style={{ marginBottom: 10 }}>Your Lessons</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("TeacherEditLesson")}>
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
                <Ionicons name="ios-add-sharp" size={20} />
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
