import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Register_screen from '../../screens/Register_screen';
import Login_screen from '../../screens/Login_screen';

const Auth = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}
    initialRouteName="Login"
    >
      <Stack.Screen name='Login' component={Login_screen} />
      <Stack.Screen name='Register' component={Register_screen} />
    </Stack.Navigator>
  )
}

export default Auth