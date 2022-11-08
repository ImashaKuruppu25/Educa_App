import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, SIZES } from "../../constants";
import AdminHome_screen from "./AdminHome_screen";

const Tab = createMaterialBottomTabNavigator();

function AdminBottomNav() {
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
        component={AdminHome_screen}
        options={{
          tabBarIcon: () => (
            <Icon name="home" color={COLORS.primary} size={SIZES.extraLarge} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={AdminHome_screen}
        options={{
          tabBarIcon: () => (
            <Icon name="book" color={COLORS.primary} size={SIZES.extraLarge} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AdminHome_screen}
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

export default AdminBottomNav;
