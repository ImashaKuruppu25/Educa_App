import { View, Text } from "react-native";
import React from "react";

const Home_screen = ({ route }) => {
  const { courses } = route.params;
  console.log(courses);
  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default Home_screen;
