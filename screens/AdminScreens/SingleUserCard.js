import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteUser,
} from '../../Redux/Actions/UserAction';

var { width } = Dimensions.get("window");

export default function SingleUserCard({ user, navigation }) {
  const dispatch = useDispatch();

  const removeUserData = (data) => {

    let id = data;
    console.log("Remove user data ============================");
    console.log(id);
    dispatch(deleteUser(id));
    ToastAndroid.showWithGravity(
      `removed from user list`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.UserCard}>
          <Image source={{ uri: user.avatar.url }} style={styles.image} />
          <View>
            <Text
              style={{
                color: "#333",
                paddingVertical: 5,
                textAlign: "left",
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              User Name : {user.name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#333",
                paddingVertical: 5,
                textAlign: "left",
                paddingLeft: 10,
                fontSize: 14,
              }}
            >
              User Role : {user.role}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#333",
                paddingVertical: 5,
                textAlign: "left",
                paddingLeft: 10,
                fontSize: 14,
              }}
            >
              User Email : {user.email}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => removeUserData(user._id)}
            >
              <Text style={styles.buttonText1}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              // onPress={() => setVisible(true)}onPress={() => removeWishListData(data._id)}
            >
              <Text style={styles.buttonText2}>Edit</Text>
            </TouchableOpacity>
          </View>

          {user.role === "student" ? (
            <View style={styles.student}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Student
              </Text>
            </View>
          ) : user.role === "teacher" ? (
            <View style={styles.teacher}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Teacher
              </Text>
            </View>
          ) : user.role === "admin" ? (
            <View style={styles.admin}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Admin
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  UserCard: {
    width: "100%",
    height: width / 4 - 20,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#e5e5e5",
    flexWrap: "wrap",
    margin: 10,
  },
  image: {
    width: "20%",
    height: width / 4 - 20,
    resizeMode: "contain",
    borderTopRightRadius: 2,
    borderTopLeftRadius: 10,
  },
  student: {
    width: 35,
    height: 35,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: -10,
    left: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  teacher: {
    width: 35,
    height: 35,
    backgroundColor: "green",
    borderRadius: 50,
    position: "absolute",
    top: -10,
    left: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  admin: {
    width: 35,
    height: 35,
    backgroundColor: "blue",
    borderRadius: 50,
    position: "absolute",
    top: -10,
    left: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    padding: 5,
    marginBottom: 6,
    marginTop: 10,
    marginHorizontal: 100,
    borderRadius: 5,
    backgroundColor: "red",
  },
  buttonText1: {
    color: "white",
  },
  button2: {
    padding: 5,
    marginTop: 10,
    marginBottom: 6,
    marginHorizontal: 100,
    borderRadius: 5,
    backgroundColor: "green",
  },
  buttonText2: {
    color: "white",
  },
});
