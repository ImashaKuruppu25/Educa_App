import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import Store from "./Redux/Store";
import { loadUser } from "./Redux/Actions/UserAction";
import Main from "./components/Navigations/Main";
import Auth from "./components/Navigations/Auth";
import Admin from "./components/Navigations/Admin";
import Teacher from "./components/Navigations/Teacher";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

const AppStack = () => {
  const { isAuthenticated, loading, error, user } = useSelector(
    (state) => state.user
  );
  
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      <NavigationContainer theme={theme}>
        <>
          {!isAuthenticated ? (
            <Auth />
          ) : (
            <>
              {user.role == "admin" ? (
                <Admin />
              ) : (
                <>{user.role == "teacher" ? <Teacher /> : <Main />}</>
              )}
            </>
          )}
        </>
      </NavigationContainer>
    </>
  );
};

export default App;
