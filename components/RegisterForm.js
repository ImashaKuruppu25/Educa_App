import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { register } from "../Redux/Actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
var { width } = Dimensions.get("window");

const RegisterForm = () => {
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/djnpm1f5w/image/upload/v1665812366/avatars/yovsiisgccydqnwpewoi.jpg"
  );

  console.log(name, email, password, avatar);

  const registerUser = () => {
    dispatch(register(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearErrors" });
    }

    if (isAuthenticated) {
      alert("User create Done!");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.LoginBox}>
        <View style={styles.relative}>
          <TextInput
            placeholder="Write your name..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={name}
            onChangeText={(text) => setName(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <TextInput
            placeholder="Write your email..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={email}
            onChangeText={(text) => setEmail(text)}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.relative}>
          <TextInput
            placeholder="Write your password..."
            placeholderTextColor="#333"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputBox}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.relative}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 80,
                resizeMode: "contain",
                borderWidth: 1,
                borderColor: "#999",
              }}
            />
            <TouchableOpacity>
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  width: width * 1 - 100,
                  backgroundColor: "#f5f5f5",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "#333",
                    fontSize: 18,
                  }}
                >
                  Choose Photo
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={registerUser}>
            <View style={styles.Button}>
              <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: width / 6 - 20,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#333",
            fontSize: 15,
          }}
        >
          Already have a account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 15,
              color: "#FB578E",
              paddingRight: 15,
            }}
          >
            {" "}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "white",
//     ...SHADOWS.dark,
//     borderRadius: 40,
//     height: 800,
//     marginTop: 30,
//   },
//   cardHeading: {
//     marginTop: 35,
//     marginLeft: 24,
//     fontFamily: FONTS.medium,
//     paddingRight: 2,
//     fontSize: SIZES.large,
//   },
//   input: {
//     width: 350,
//     marginTop: 10,
//     marginBottom: 10,
//     padding: 8,
//     fontSize: SIZES.font,
//     borderBottomColor: COLORS.lightGray,
//     borderBottomWidth: 1,
//     fontFamily: FONTS.regular,
//   },
//   container: {
//     padding: 20,
//   },
//   submitButton: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 15,
//     paddingHorizontal: 32,
//     margin: 30,
//     borderRadius: 6,
//     elevation: 5,
//     backgroundColor: COLORS.primary,
//     width: 285,
//   },
//   submitButtonText: {
//     color: COLORS.white,
//     fontSize: SIZES.font,
//   },
//   redioBtnText: {
//     width: 350,
//     marginTop: 10,
//     marginBottom: 10,
//     padding: 8,
//     fontSize: SIZES.font,
//     fontFamily: FONTS.regular,
//   },
//   radioBtnGroup: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//   },

//   loginLink: {
//     color: COLORS.primary,
//     fontFamily: FONTS.semiBold,
//   },
// });

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: "white",
    height: width * 2,
    marginTop: 10,
  },
  inputBox: {
    width: width * 1 - 50,
    marginTop: 0,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.font,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    fontFamily: FONTS.regular,
  },
  relative: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
    color: "#FB578E",
  },
  LoginBox: {
    marginTop: width / 9,
  },
  Button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default RegisterForm;
