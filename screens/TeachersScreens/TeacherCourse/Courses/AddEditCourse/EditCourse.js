import React from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { assets } from "../../../../../constants";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const EditCourse = () => {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        height: height,
        width: "100%",
        flexDirection: "column",
      }}
    >
      <View>
        <Image
          source={assets.CreateCourse}
          style={{
            width: width,
            height: 250,
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text>Category</Text>
        </View>
        <View>
          <Text>Class</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text>How Many Student?</Text>
        </View>
        <View>
          <Text>Duration</Text>
        </View>
      </View>
      <View>
        <Text>Name</Text>
      </View>

      <View>
        <Button>Edit Course</Button>
      </View>
    </View>
  );
};
export default EditCourse;
