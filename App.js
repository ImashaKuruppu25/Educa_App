import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login_screen from "./screens/Login_screen";
import Register_screen from "./screens/Register_screen";
import OnBoarding1 from "./screens/Slides/OnBoarding1";
import OnBoarding2 from "./screens/Slides/OnBoarding2";
import OnBoarding3 from "./screens/Slides/OnBoarding3";
import ClassOption_screen from "./screens/StudentsScreens/ClassOption_screen";
import CourseOption_screen from "./screens/StudentsScreens/CourseOption_screen";
import Home_screen from "./screens/StudentsScreens/Home_screen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  //fonts load
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Register"
      >
        <Stack.Screen name="Register" component={Register_screen} />
        <Stack.Screen name="Login" component={Login_screen} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="ClassOption" component={ClassOption_screen} />
        <Stack.Screen name="CourseOption" component={CourseOption_screen} />
        <Stack.Screen name="StudentHome" component={Home_screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
