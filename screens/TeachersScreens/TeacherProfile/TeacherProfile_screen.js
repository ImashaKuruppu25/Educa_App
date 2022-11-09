import { View, Text, Image, Dimensions, StatusBar } from "react-native";
import { assets } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import TeacherNavigation from "../TeacherComponents/Navigation/TeacherNavigation";
import { Button } from "react-native-paper";
import { General } from "./General/General";
import { Badges } from "./Badges/Badges";

const TeacherProfile_screen = () => {
  const [generalbuttonColor, setgeneralbuttonColor] = useState("#2F80ED");
  const [generalfontColor, setgeneralfontColor] = useState("white");
  const [badgesbuttonColor, setbadgesbuttonColor] = useState("white");
  const [badgesfontColor, setbadgesfontColor] = useState("black");
  const [component, setComponent] = useState(true);
  const [name, setName] = useState("Christina Angela");
  const [email, setEmail] = useState("ca@gmail.com");
  const [password, setPassword] = useState("ChristinaAngela1234");
  const [phoneNumber, setphoneNumber] = useState("0714335111");

  const navigation = useNavigation();
  const height = Dimensions.get("window").height;

  return (
    <View
      style={{
        height: height,
        width: "100%",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          flex: 1.5,
          // backgroundColor: "red",
          // marginTop: "10%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View>
          <Image
            source={assets.lessonprogressT}
            style={{ height: 120, width: 120, borderRadius: 100 }}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 16, textAlign: "center" }}>{name}</Text>
          <Text style={{ fontSize: 14, textAlign: "center" }}>
            @dark.prince123
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: 5,
          paddingLeft: 5,
          paddingRight: 5,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 8,
          margin: 20,
          marginBottom: 10,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Your balance
            </Text>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              $15,567
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: "wrap-reverse",
              paddingBottom: 10,
            }}
          >
            <Button
              style={{ width: 120, height: 40, backgroundColor: "#2F80ED" }}
            >
              <Text style={{ color: "white" }}>Withdraw</Text>
            </Button>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ textAlign: "center" }}>Approved</Text>
            <Text style={{ textAlign: "center", color: "#2F80ED" }}>
              $1,567
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ textAlign: "center" }}>Pending</Text>
            <Text style={{ textAlign: "center", color: "#2F80ED" }}>
              $1,673
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button
            style={{
              width: 150,
              height: 40,
              backgroundColor: `${generalbuttonColor}`,
            }}
            onPress={() => {
              setbadgesbuttonColor("white");
              setbadgesfontColor("black");
              setgeneralbuttonColor("#2F80ED");
              setgeneralfontColor("white");
              setComponent(true);
            }}
          >
            <Text style={{ color: `${generalfontColor}` }}>General</Text>
          </Button>
          <Button
            style={{
              width: 150,
              height: 40,
              backgroundColor: `${badgesbuttonColor}`,
            }}
            onPress={() => {
              setbadgesbuttonColor("#2F80ED");
              setbadgesfontColor("white");
              setgeneralbuttonColor("white");
              setgeneralfontColor("black");
              setComponent(false);
            }}
          >
            <Text style={{ color: `${badgesfontColor}` }}>Badges</Text>
          </Button>
        </View>
      </View>
      <View style={{ flex: 4.5, flexDirection: "column" }}>
        <View style={{ flex: 8 }}>
          {component ? (
            <General
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              setphoneNumber={setphoneNumber}
              name={name}
              email={email}
              password={password}
              phoneNumber={phoneNumber}
            />
          ) : (
            <Badges />
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ textAlign: "center", fontSize: 25, color: "#2F80ED" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Log Out
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <TeacherNavigation />
      </View>
    </View>
  );
};

export default TeacherProfile_screen;
