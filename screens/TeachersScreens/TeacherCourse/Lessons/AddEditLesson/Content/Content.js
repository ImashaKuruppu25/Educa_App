import React from "react";
import { Text, View, FlatList } from "react-native";

const DATA = [
  {
    id: 1,
    title: "Topic",
    description: "Description",
  },
  {
    id: 2,
    title: "T",
    description: "Description",
  },
  {
    id: 3,
    title: "T",
    description: "Description",
  },
  {
    id: 4,
    title: "T",
    description: "Description",
  },
  {
    id: 5,
    title: "T",
    description: "Description",
  },
  {
    id: 6,
    title: "T",
    description: "Description",
  },
  {
    id: 7,
    title: "T",
    description: "Description",
  },
];

export const Content = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        return (
          <View style={{ margin: 10 }}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};
