import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Materialicons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { Button, TextInput } from "react-native-paper";

export const General = () => {
  const [nameEdit, setnameEdit] = useState(false);
  const [emailEdit, setemailEdit] = useState(false);
  const [passwordEdit, setpasswordEdit] = useState(false);
  const [phoneEdit, setphoneEdit] = useState(false);
  const [paymentEdit, setpaymentEdit] = useState(false);

  return (
    <View>
      <ScrollView style={{ height: "100%", width: "100%" }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 1, padding: 5 }}>
            <Ionicons name="person" size={20} color="#2F80ED" />
          </View>
          {!nameEdit ? (
            <>
              <View style={{ flex: 12 }}>
                <Text>Name</Text>
                <Text>Christina Angela</Text>
              </View>
              <View style={{ flex: 1, paddingTop: 10 }}>
                <Feather
                  name="edit-2"
                  size={20}
                  color="#2F80ED"
                  onPress={() => setnameEdit(true)}
                />
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 13 }}>
                <TextInput
                  style={{ backgroundColor: "white", height: 40 }}
                  placeholder="Name"
                />
              </View>
              <View style={{ flex: 1, paddingTop: 15 }}>
                <Entypo
                  name="cross"
                  size={30}
                  color="red"
                  onPress={() => setnameEdit(false)}
                />
              </View>
            </>
          )}
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 1, padding: 5 }}>
            <Materialicons name="email" size={20} color="#2F80ED" />
          </View>
          {!emailEdit ? (
            <>
              <View style={{ flex: 12 }}>
                <Text>Email</Text>
                <Text>ca@gmail.com</Text>
              </View>
              <View style={{ flex: 1, paddingTop: 10 }}>
                <Feather
                  name="edit-2"
                  size={20}
                  color="#2F80ED"
                  onPress={() => setemailEdit(true)}
                />
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 13 }}>
                <TextInput
                  style={{ backgroundColor: "white", height: 40 }}
                  placeholder="Email"
                />
              </View>
              <View style={{ flex: 1, paddingTop: 15 }}>
                <Entypo
                  name="cross"
                  size={30}
                  color="red"
                  onPress={() => setemailEdit(false)}
                />
              </View>
            </>
          )}
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View
            style={{ flex: 1, padding: 5, paddingLeft: 7, paddingRight: 1 }}
          >
            <FontAwesome name="lock" size={23} color="#2F80ED" />
          </View>
          {!passwordEdit ? (
            <>
              <View style={{ flex: 12 }}>
                <Text>Password</Text>
                <Text>Tap to change password</Text>
              </View>
              <View style={{ flex: 1, paddingTop: 10 }}>
                <Feather
                  name="edit-2"
                  size={20}
                  color="#2F80ED"
                  onPress={() => setpasswordEdit(true)}
                />
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 13 }}>
                <TextInput
                  style={{ backgroundColor: "white", height: 40 }}
                  placeholder="Password"
                  secureTextEntry={true}
                />
              </View>
              <View style={{ flex: 1, paddingTop: 15 }}>
                <Entypo
                  name="cross"
                  size={30}
                  color="red"
                  onPress={() => setpasswordEdit(false)}
                />
              </View>
            </>
          )}
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 1, paddingLeft: 8, paddingTop: 9 }}>
            <Fontisto name="mobile-alt" size={20} color="#2F80ED" />
          </View>
          {!phoneEdit ? (
            <>
              <View style={{ flex: 12 }}>
                <Text>Phone number</Text>
                <Text>071-1234567</Text>
              </View>
              <View style={{ flex: 1, paddingTop: 10 }}>
                <Feather
                  name="edit-2"
                  size={20}
                  color="#2F80ED"
                  onPress={() => setphoneEdit(true)}
                />
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 13 }}>
                <TextInput
                  style={{ backgroundColor: "white", height: 40 }}
                  placeholder="0711111111"
                />
              </View>
              <View style={{ flex: 1, paddingTop: 15 }}>
                <Entypo
                  name="cross"
                  size={30}
                  color="red"
                  onPress={() => setphoneEdit(false)}
                />
              </View>
            </>
          )}
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 1, padding: 5 }}>
            <FontAwesome name="cc-mastercard" size={23} color="#2F80ED" />
          </View>
          <View style={{ flex: 12 }}>
            <Text>Payment</Text>
            <Text>Tap to change payment</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Feather
              name="edit-2"
              size={20}
              color="#2F80ED"
              onPress={() => setpaymentEdit(true)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 1, padding: 5 }}>
            <Ionicons name="shield-sharp" size={20} color="#2F80ED" />
          </View>
          <View style={{ flex: 12 }}>
            <Text>Privacy policy</Text>
            <Text>Tap to see privacy policy</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Feather
              name="edit-2"
              size={20}
              color="#2F80ED"
              onPress={() => setnameEdit(true)}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          {nameEdit | emailEdit | passwordEdit | phoneEdit | paymentEdit ? (
            <Button style={{ backgroundColor: "#2F80ED" }}>
              <Text style={{ color: "white" }}>Submit</Text>
            </Button>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
