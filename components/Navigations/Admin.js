import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AdminHome_screen from '../../screens/AdminScreens/AdminHome_screen';
import UserManagement_screen from '../../screens/AdminScreens/UserManagement_screen';


const Admin = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}
    initialRouteName="AdminHome_screen"
    >
      <Stack.Screen name='AdminHome' component={AdminHome_screen} />
      <Stack.Screen name='Register' component={UserManagement_screen} />
    </Stack.Navigator>
  )
}

export default Admin