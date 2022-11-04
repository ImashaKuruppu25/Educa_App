import { View, Text, FlatList, Image } from "react-native";
import { assets } from "../../../../constants";
import React from "react";
import { ProgressBar } from "react-native-paper";

const DATA = [
  {
    id: 1,
    name: "Maths",
    title: "title",
    progress: 5 / 10,
  },
  {
    id: 2,
    name: "Science",
    title: "Teset",
    progress: 3 / 10,
  },
  {
    id: 3,
    name: "Bio",
    title: "Batman",
    progress: 5 / 10,
  },
  {
    id: 4,
    name: "Bio",
    title: "Superman",
    progress: 5 / 10,
  },
  {
    id: 5,
    name: "Bio",
    title: "Batman",
    progress: 5 / 10,
  },
  {
    id: 6,
    name: "Bio",
    title: "Batman",
    progress: 5 / 10,
  },
  {
    id: 7,
    name: "Bio",
    title: "Batman",
    progress: 5 / 10,
  },
];

const LessonProgress = () => {
  return (
    <View style={{ height: "100%" }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          paddingLeft: 5,
          marginBottom: 10,
        }}
      >
        Lesson Progress
      </Text>
      <FlatList
        data={DATA}
        horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={{
                borderColor: "gray",
                borderWidth: 2,
                margin: 5,
                width: 200,
                borderRadius: 10,
                flexDirection: "column",
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  source={assets.lessonprogressT}
                  style={{
                    minWidth: "100%",
                    minHeight: "50%",
                    borderTopRightRadius: 8,
                    borderTopLeftRadius: 8,
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, padding: 3, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 16, paddingLeft: 3, paddingBottom: 3 }}
                >
                  {item.title}
                </Text>
                <View style={{ padding: 3 }}>
                  <ProgressBar
                    progress={item.progress}
                    color={"blue"}
                    visible={true}
                    style={{
                      width: "99%",
                      height: 4,
                      //   backgroundColor: "red",
                    }}
                  />
                  <Text style={{ textAlign: "right", paddingTop: 10 }}>
                    {item.progress}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default LessonProgress;
