import React from "react";
import { Text, View } from "react-native";

export const EditDetails = (props) => {
  return (
    <View
      style={{
        margin: 10,
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "gray",
      }}
    >
      <Text>{props.details}</Text>
    </View>
  );
};
