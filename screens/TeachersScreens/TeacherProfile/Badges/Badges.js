import React from "react";
import { View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
const DATA = [
  {
    id: 1,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 2,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 3,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 4,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 5,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 6,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 7,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
  {
    id: 8,
    title: "Good Teacher",
    description: "Hakuna Matata",
  },
];
export const Badges = () => {
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                padding: 10,
              }}
            >
              <Icon
                name="badge"
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  marginTop: 10,
                  color: "red",
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ marginLeft: 10 }}>{item.title}</Text>
                <Text style={{ marginLeft: 10 }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
