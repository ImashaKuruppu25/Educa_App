import AdminHeader from "./AdminHeader";

import { View, ScrollView, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../../Redux/Actions/UserAction";
import HomeUser from "./HomeUser";
import AdminNavigation from "./AdminNavigation";



export default function AdminHome({ navigation }) {
  const dispatch = useDispatch();
  const { users, error } = useSelector((state) => state.users);
  console.log(users);
  console.log(error);
  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(GetAllUsers());
  }, [dispatch, error]);

  return (
    <View>
      <AdminHeader navigation={navigation} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HomeUser
          users={users}
          navigation={navigation}
        />
      </ScrollView>
      <AdminNavigation/>
    </View>
  );
}
