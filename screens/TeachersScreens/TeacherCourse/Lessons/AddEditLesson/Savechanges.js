import React from "react";
import { View, Text, Dimensions, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import Antdesign from "react-native-vector-icons/AntDesign";
import { DeleteLesson } from "./DeleteLesson/DeleteLesson";
const height = Dimensions.get("window").height;

const SaveChanges = ({ route }) => {
  const { values, lessons } = route.params;
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
          flex: 0.2,
          flexDirection: "row",
          padding: 5,
          borderBottomWidth: 1,
          borderColor: "gray",
        }}
      >
        <Pressable
          onPress={() =>
            navigation.navigate("TeacherViewCourse", { values: values })
          }
        >
          <Antdesign name="arrowleft" size={30} />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Edit Course Content
        </Text>
      </View>
      <View style={{ flex: 5 }}>
        <View
          style={{
            paddingTop: 10,
            flex: 0.8,
            borderBottomWidth: 1,
            borderColor: "gray",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            Course Name
          </Text>
          <Text
            style={{
              margin: 10,
              marginTop: 5,
              padding: 5,
              // borderWidth: 1,
              // borderColor: "gray",
            }}
          >
            {values.title}
          </Text>
        </View>
        <View style={{ flex: 7, height: "100%" }}>
          <DeleteLesson lessons={lessons} />
        </View>
        <View
          style={{
            flex: 0.7,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Button
            style={{
              height: "80%",
              width: "50%",
              borderColor: "#2F80ED",
              borderWidth: 1,
              marginLeft: "auto",
              marginRight: 10,
              marginTop: 5,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("TeacherAddLesson")}
          >
            <Text style={{ color: "#2F80ED" }}>Add New Lesson</Text>
          </Button>
        </View>
      </View>
      <View
        style={{
          flex: 0.4,
          padding: 5,
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            height: "100%",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#2F80ED",
            justifyContent: "center",
          }}
          onPress={() =>
            navigation.navigate("TeacherViewCourse", { values: values })
          }
        >
          <Text style={{ color: "white" }}>Save Changes</Text>
        </Button>
      </View>
    </View>
  );
};
export default SaveChanges;
