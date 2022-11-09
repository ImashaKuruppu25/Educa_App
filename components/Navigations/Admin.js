import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdminHome from "../../screens/AdminScreens/AdminHome";

import ProfileScreen from "../../screens/AdminScreens/ProfileScreen";

const Admin = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "#3BB77E",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          marginVertical: 2,
        },
      }}
      initialRouteName="AdminHome"
    >
      <Stack.Screen name="AdminHome" component={AdminHome} />


      
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Admin;
