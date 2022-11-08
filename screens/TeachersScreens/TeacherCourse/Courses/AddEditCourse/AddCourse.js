import React from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { assets } from "../../../../../constants";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Addcourse = () => {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        height: height,
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View>
          <Image
            source={assets.CreateCourse}
            style={{
              width: width,
              height: 250,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            marginTop: 50,
          }}
        >
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text>Category</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="Category"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Class</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="Class"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
          }}
        >
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text>How Many Student?</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="How Many Student?"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Duration</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="Duration"
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text>Name</Text>
          <TextInput
            style={{ backgroundColor: "white", height: 40 }}
            placeholder="Name"
          />
        </View>
      </View>
      <View>
        <Button
          mode="contained"
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            backgroundColor: "#2F80ED",
            margin: 10,
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>Create Course</Text>
        </Button>
      </View>
    </View>
  );
};
export default Addcourse;
