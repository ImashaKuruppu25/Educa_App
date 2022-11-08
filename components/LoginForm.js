import { View, Text, StyleSheet, TextInput, Pressable, Dimensions, } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/Actions/UserAction";

var {width} = Dimensions.get('window');

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { error, isAuthenticated, user } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    //() => navigation.navigate("OnBoarding1")
  };
  
  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (isAuthenticated) {
      alert("Login Successfully!");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <View style={styles.card}>
      <Text style={styles.cardHeading}>Login</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Write your email..."
          placeholderTextColor="#333"
          style={styles.input}
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Write your password..."
          placeholderTextColor="#333"
          style={styles.input}
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.forgetPassword}>Forget password</Text>

        <Pressable
          style={styles.submitButton}
          onPress={loginSubmit}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </Pressable>
        <View style={{ alignSelf: "center" }}>
          <Text>
            Don’t have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={styles.loginLink}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    ...SHADOWS.dark,
    borderRadius: 40,
    height: 800,
    marginTop: 30,
  },
  cardHeading: {
    marginTop: 35,
    marginLeft: 24,
    fontFamily: FONTS.medium,
    paddingRight: 2,
    fontSize: SIZES.large,
  },
  input: {
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.font,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    fontFamily: FONTS.regular,
  },
  container: {
    padding: 20,
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    margin: 30,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: COLORS.primary,
    width: 285,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: SIZES.font,
  },
  redioBtnText: {
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
  },
  radioBtnGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },

  loginLink: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
  },
  forgetPassword: {
    color: COLORS.lightGray,
    textAlign: "right",
    fontSize: SIZES.small,
  },
});

export default LoginForm;
