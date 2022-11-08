import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const AdminHome_screen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.dashboard}>
      <View style={styles.countContainer}>
        <View style={styles.countContainerItem}>
          <Text style={styles.itemText}>Students</Text>
          <Text style={styles.itemSubText}>105</Text>
        </View>
        <View style={styles.countContainerItem}>
          <Text style={styles.itemText}>Teachers</Text>
          <Text style={styles.itemSubText}>25</Text>
        </View>
        <View style={styles.countContainerItem}>
          <Text style={styles.itemText}>Classes</Text>
          <Text style={styles.itemSubText}>75</Text>
        </View>
      </View>
      <View style={styles.options}>
        <View style={styles.subOptions}>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() => navigation.push("UserManagement")}
          >
            <Image source={assets.AdminDashboard} />
            <Text style={styles.subOptionText}>User management</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 5 }}>
            <Image source={assets.AdminDashboard} />
            <Text style={styles.subOptionText}>Class management</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subOptions}>
          <TouchableOpacity style={{ margin: 5 }}>
            <Image source={assets.AdminDashboard} />
            <Text style={styles.subOptionText}>App management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() => navigation.push("AdminRequest")}
          >
            <Image source={assets.AdminDashboard} />
            <Text style={styles.subOptionText}>Requset management</Text>
          </TouchableOpacity>
        </View>
      </View>

    <View>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>
      <Text>AdminHome_screen</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    padding: 10,
    marginTop: 55,
  },
  countContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countContainerItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#99A7D6",
    padding: 25,
    borderRadius: 6,
  },
  itemText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    marginBottom: 10,
  },
  itemSubText: {
    fontSize: SIZES.extraLarge,
    color: COLORS.white,
    marginBottom: 5,
    fontFamily: FONTS.bold,
  },
  options: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  subOptions: {
    display: "flex",
    flexDirection: "row",
  },
  subOptionText: {
    position: "absolute",
    top: 60,
    right: 35,
    width: 100,
    textAlign: "center",
    fontFamily: FONTS.bold,
    lineHeight: 20,
    color: COLORS.white,
  },
});

export default AdminHome_screen;
