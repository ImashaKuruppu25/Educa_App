import React from "react";
import { View, Text, Dimensions, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Antdesign from "react-native-vector-icons/AntDesign";
import { Button, TextInput } from "react-native-paper";
const height = Dimensions.get("window").height;

const EditLesson = () => {
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
        {/* <Pressable onPress={() => navigation.navigate("TeacherSaveChanges")}>
          <Antdesign name="arrowleft" size={30} />
        </Pressable> */}
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Edit Lesson
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
                value={"subject"}
                // onChangeText={(newText) => setSubject(newText)}
              />
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
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
                value={"subject"}
                // onChangeText={(newText) => setSubject(newText)}
              />
            </View>
            <View
              style={{ marginBottom: "10%", paddingLeft: 10, paddingRight: 10 }}
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
                value={"subject"}
                // onChangeText={(newText) => setSubject(newText)}
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
                value={"subject"}
                // onChangeText={(newText) => setSubject(newText)}
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
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Add Note
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                }}
                value={"subject"}
                // onChangeText={(newText) => setSubject(newText)}
              />
            </View>
            {/* <View>
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Add Content
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 40,
                  paddingLeft: 10,
                  paddingRight: 10,
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
          >
            <Text style={{ color: "white" }}>Edit Lesson</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
export default EditLesson;
