import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
const TeacherNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [home, setHome] = useState("black");
  const [course, setCourse] = useState("black");
  const [profile, setProfile] = useState("black");

  useEffect(() => {
    if (route.name === "TeacherHome") {
      setHome("cyan");
    }
    if (route.name === "TeacherCourse") {
      setCourse("cyan");
    }
    if (route.name === "TeacherProfile") {
      setProfile("cyan");
    }
  }, [route]);

  return (
    <View
      style={{
        flexDirection: "row",
        height: "100%",
      }}
    >
      <Pressable
        style={{ flex: 1, borderColor: "black", borderTopWidth: 1 }}
        onPress={() => navigation.navigate("TeacherHome")}
      >
        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <Feather name="home" size={20} color={`${home}`} />

          {/* <Text style={{ textAlign: "center" }}>Home</Text> */}
        </View>
      </Pressable>
      <Pressable
        style={{
          flex: 1,
          borderColor: "black",
          borderTopWidth: 1,
        }}
        onPress={() => navigation.navigate("TeacherCourse")}
      >
        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <Feather name="book" size={20} color={`${course}`} />
          {/* <Text style={{ textAlign: "center" }}>Courses</Text> */}
        </View>
      </Pressable>

      <Pressable
        style={{
          flex: 1,
          borderColor: "black",
          borderTopWidth: 1,
        }}
        onPress={() => navigation.navigate("TeacherProfile")}
      >
        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <Ionicons name="person-outline" size={20} color={`${profile}`} />
          {/* <Text style={{ textAlign: "center" }}>Profile</Text> */}
        </View>
      </Pressable>
    </View>
  );
};

export default TeacherNavigation;
