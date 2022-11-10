import React, { useState } from "react";
import { View, Text, Dimensions, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Antdesign from "react-native-vector-icons/AntDesign";
import { Button, TextInput } from "react-native-paper";
import axios from "axios";
const height = Dimensions.get("window").height;

const AddLesson = ({ route }) => {
  const navigation = useNavigation();
  const { values } = route.params;
  const [lessonName, setLessonName] = useState("");
  const [chapters, setChapters] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [addNote, setaddNote] = useState("");
  const addLesson = async () => {
    try {
      let arr = await axios
        .post("https://uee-b.herokuapp.com/teacher/createLesson", {
          lessonName: lessonName,
          chapters: chapters,
          description: description,
          topic: topic,
          addNote: addNote,
        })
        .then(navigation.navigate("TeacherCourse"));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flexDirection: "column",
        height: height,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          borderBottomWidth: 1,
          borderColor: "gray",
          flex: 1,
        }}
      >
        {/* <Pressable onPress={() => navigation.navigate("TeacherSaveChanges")}>
          <Antdesign name="arrowleft" size={30} />
        </Pressable> */}
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Add Lesson
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          flex: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              paddingTop: 10,
              flexDirection: "column",
            }}
          >
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Lesson Name
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                // value={"subject"}
                onChangeText={(newText) => setLessonName(newText)}
              />
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Chapters
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                // value={"subject"}
                onChangeText={(newText) => setChapters(newText)}
              />
            </View>
            <View
              style={{
                marginBottom: "10%",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Description
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                // value={"subject"}
                onChangeText={(newText) => setDescription(newText)}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  borderTopWidth: 1,
                  marginTop: 10,
                  paddingTop: "10%",
                  borderColor: "gray",
                }}
              >
                Topic
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                // value={"subject"}
                onChangeText={(newText) => setTopic(newText)}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingRight: 10,
                  paddingTop: 10,
                }}
              >
                Add Note
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                // value={"subject"}
                onChangeText={(newText) => setaddNote(newText)}
              />
            </View>
            {/* <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                }}
              >
                Add Content
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                value={"subject"}
                // onChangeText={(newText) => setSubject(newText)}
              />
            </View> */}
          </View>
          {/* <View style={{ flex: 1 }}>
          <Content />
        </View> */}
        </View>
        <View
          style={{
            justifyContent: "center",
            marginBottom: 20,
            height: "10%",
          }}
        >
          <Button
            mode="contained"
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              height: "80%",
              justifyContent: "center",
              backgroundColor: "#2F80ED",
            }}
            onPress={() => addLesson()}
          >
            <Text style={{ color: "white" }}>Add Lesson</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
export default AddLesson;
