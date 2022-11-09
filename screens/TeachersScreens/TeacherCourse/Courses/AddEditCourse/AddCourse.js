import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import axios from "axios";
import { assets } from "../../../../../constants";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Addcourse = () => {
  const [subject, setSubject] = useState("");
  const [clz, setClass] = useState("");
  const [hms, setHms] = useState("");
  const [duration, setDuration] = useState(null);
  const [title, setTitle] = useState("");
  const submitData = async () => {
    try {
      let arr = await axios
        .post("https://uee-b.herokuapp.com/teacher/createCourse", {
          subject: subject,
          title: title,
          time: duration,
          students: hms,
          progress: clz,
        })
        .then(console.log(arr));
    } catch (err) {
      console.log(err);
    }
  };
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
            <Text>Subject</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="Subject"
              onChangeText={(newText) => setSubject(newText)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Class</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="Class"
              onChangeText={(newText) => setClass(newText)}
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
              onChangeText={(newText) => setHms(newText)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Duration</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              placeholder="Duration"
              onChangeText={(newText) => setDuration(newText)}
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text>Title</Text>
          <TextInput
            style={{ backgroundColor: "white", height: 40 }}
            placeholder="Title"
            onChangeText={(newText) => setTitle(newText)}
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
          onPress={() => {
            submitData();
          }}
        >
          <Text style={{ color: "white" }}>Create Course</Text>
        </Button>
      </View>
    </View>
  );
};
export default Addcourse;
