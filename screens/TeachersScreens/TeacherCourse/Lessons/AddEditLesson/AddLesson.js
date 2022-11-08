import React from "react";
import { View, Text, Dimensions, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Antdesign from "react-native-vector-icons/AntDesign";
import { EditDetails } from "./EditComponent/EditDetails";
import { Button } from "react-native-paper";
const height = Dimensions.get("window").height;

const AddLesson = () => {
  const navigation = useNavigation();

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
        <Pressable onPress={() => navigation.navigate("TeacherSaveChanges")}>
          <Antdesign name="arrowleft" size={30} />
        </Pressable>
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
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Lesson Name
              </Text>
              <EditDetails details={"Test"} />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Chapters
              </Text>
              <EditDetails details={"Test"} />
            </View>
            <View style={{ marginBottom: "10%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Description
              </Text>
              <EditDetails details={"Test"} />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderTopWidth: 1,
                  marginTop: 10,
                  paddingTop: "10%",
                  borderColor: "gray",
                }}
              >
                Topic
              </Text>
              <EditDetails details={"Test"} />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Add Note
              </Text>
              <EditDetails details={"Test"} />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Add Content
              </Text>
              <EditDetails details={"Test"} />
            </View>
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
          >
            <Text style={{ color: "white" }}>Add Lesson</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
export default AddLesson;
