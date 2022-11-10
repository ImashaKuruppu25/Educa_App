import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MyPrfile_screen from "../screens/StudentsScreens/MyProfile_screen";
import Home_screen from "../screens/StudentsScreens/Home_screen";
import MyClasses from "../screens/StudentsScreens/MyClasses";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, SIZES } from "../constants";
import ProfileScreen from "../screens/AdminScreens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs({ route }) {
  const { courses, name } = route.params;
  //   console.log(courses);
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#ffff",
        height: 60,
        padding: 10,
      }}
      activeColor={COLORS.primary}
      inactiveColor="white"
    >
      <Tab.Screen
        name="Home"
        component={Home_screen}
        initialParams={{ courses: courses, name: name }}
        options={{
          tabBarIcon: () => (
            <Icon name="home" color={COLORS.primary} size={SIZES.extraLarge} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={MyClasses}
        initialParams={{ courses: courses, name: name }}
        options={{
          tabBarIcon: () => (
            <Icon name="book" color={COLORS.primary} size={SIZES.extraLarge} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon
              name="user-circle-o"
              color={COLORS.primary}
              size={SIZES.extraLarge}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
