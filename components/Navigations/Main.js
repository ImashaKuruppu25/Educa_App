import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding1 from "../../screens/Slides/OnBoarding1";
import OnBoarding2 from "../../screens/Slides/OnBoarding2";
import OnBoarding3 from "../../screens/Slides/OnBoarding3";
import ClassOption_screen from "../../screens/StudentsScreens/ClassOption_screen";
import CourseOption_screen from "../../screens/StudentsScreens/CourseOption_screen";
import MyTabs from "../BottomNav";
import MyRequest_screen from "../../screens/StudentsScreens/MyRequest_screen";
import Course_screen from "../../screens/StudentsScreens/Course_screen";
import CourseDetail_screen from "../../screens/StudentsScreens/CourseDetail_screen";
const Main = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnBoarding1"
      >
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="ClassOption" component={ClassOption_screen} />
        <Stack.Screen name="CourseOption" component={CourseOption_screen} />
        <Stack.Screen name="BottomNavigator" component={MyTabs} />
        <Stack.Screen name="SingleCourse" component={Course_screen} />
        <Stack.Screen name="CourseDetails" component={CourseDetail_screen} />

        <Stack.Screen name="MyRequest" component={MyRequest_screen} />
      </Stack.Navigator>
    </>
  );
};

export default Main;
