import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

var { width } = Dimensions.get("window");
var height = Dimensions.get("window").height;

const AdminHeader = ({ navigation }) => {
  return (
    <>
      <View style={styles.headerMain}>
        <View style={styles.headerFlex}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          ></TouchableOpacity>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#333"
            style={styles.searchBox}
           
          />
        </View>
      </View>
    </>
  );
};

export default AdminHeader;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: "#fff",
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: "#e5e5e5",
    marginHorizontal: 10,
    borderRadius: 25,
    fontSize: 15,
    color: "#333",
    paddingHorizontal: 10,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    bottom: -15,
    right: 15,
  },
  
});
