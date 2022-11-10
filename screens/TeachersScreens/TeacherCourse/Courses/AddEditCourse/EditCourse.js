import React, { useState } from "react";
import { View, Text, Image, StatusBar, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { assets } from "../../../../../constants";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const EditCourse = ({ route }) => {
  const { values } = route.params;
  const navigator = useNavigation();
  const [subject, setSubject] = useState(values.subject);
  const [clz, setClass] = useState(values.progress);
  const [hms, setHms] = useState(values.students);
  const [duration, setDuration] = useState(values.time);
  const [title, setTitle] = useState(values.title);
  const editData = async () => {
    console.log;
    try {
      let arr = await axios
        .put(`https://uee-b.herokuapp.com/teacher/updateCourse/${values._id}`, {
          subject: subject,
          title: title,
          time: duration,
          students: hms,
          progress: clz,
        })
        .then(navigator.navigate("TeacherCourse", { newInput: false }));
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
              value={subject}
              onChangeText={(newText) => setSubject(newText)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Chapters</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              value={clz}
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
              value={hms}
              onChangeText={(newText) => setHms(newText)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Duration</Text>
            <TextInput
              style={{ backgroundColor: "white", height: 40 }}
              value={duration}
              onChangeText={(newText) => setDuration(newText)}
            />
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text>Title</Text>
          <TextInput
            style={{ backgroundColor: "white", height: 40 }}
            value={title}
            onChangeText={(newText) => setTitle(newText)}
          />
        </View>
      </View>
      <View>
        <Button
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
            editData();
          }}
        >
          <Text style={{ color: "white" }}>Edit values</Text>
        </Button>
      </View>
    </View>
  );
};
export default EditCourse;
