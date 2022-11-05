import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ClassOption_screen from "../screens/StudentsScreens/ClassOption_screen";
import Home_screen from "../screens/StudentsScreens/Home_screen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs({ route }) {
  const { courses, name } = route.params;
  //   console.log(courses);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home_screen}
        initialParams={{ courses: courses, name: name }}
      />
      <Tab.Screen
        name="Courses"
        component={ClassOption_screen}
        initialParams={{ courses: courses, name: name }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
