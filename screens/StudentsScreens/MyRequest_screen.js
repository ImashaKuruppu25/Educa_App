import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { requests } from "../../constants/data";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, SHADOWS } from "../../constants";
import CustomSwitch from "../../components/CustomSwitch";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item, nav }) => (
  <View>
    <View
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: COLORS.lightGray }}> created:{item.date}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 50,
        }}
      >
        <Icon name="pencil" size={20} color={COLORS.primary} />
        <TouchableOpacity
          onPress={() => {
            requests.pop();
            alert("reply deleted");
            nav.push("MyRequest");
          }}
        >
          <Icon name="trash-o" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.req}>
      <Icon name="user-circle" size={30} color={COLORS.primary} />
      <Text style={{ marginLeft: 10, width: 235 }}>{item.request}</Text>
    </View>
    <View style={styles.rep}>
      <Text style={{ marginRight: 10, width: 235, color: "white" }}>
        {item.reply}
      </Text>
      <Icon name="user-circle" size={30} color="white" />
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: COLORS.lightGray,
      }}
    ></View>
  </View>
);
const MyRequest_screen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("second");
  const date = new Date();
  const [switchIndex, setSwitchIndex] = useState(1);
  const renderItem = ({ item }) => {
    return <Item item={item} nav={navigation} />;
  };

  const onSelectSwitch = (index) => {
    setSwitchIndex(index);
  };
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.container}></View>
      <View style={{ alignItems: "center", margin: 20 }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={"My Requests"}
          option2={"New Request"}
          onSelectSwitch={onSelectSwitch}
          selectionColor={COLORS.primary}
        />
      </View>
      {switchIndex === 1 ? (
        <View style={styles.reqList}>
          <FlatList
            data={requests}
            renderItem={renderItem}
            keyExtractor={(item) => item.reqId}
          />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Ask me anything...."
            style={styles.input}
            onChangeText={(text) => setText(text)}
          />
          <View style={{ alignItems: "center", margin: 50 }}>
            <TouchableOpacity
              onPress={() => {
                requests.push({
                  reqId: Math.random() * 10,
                  date:
                    date.getDate() +
                    "/" +
                    date.getMonth() +
                    "/" +
                    date.getFullYear(),
                  request: text,
                });
                alert("Request added !");
                navigation.push("MyRequest");
              }}
            >
              <PrimaryBtn name="Submit Request" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  req: {
    padding: 15,
    backgroundColor: "#FAFAFA",
    width: 295,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    ...SHADOWS.light,
    marginTop: 10,
    marginBottom: 10,
  },
  rep: {
    padding: 15,
    backgroundColor: COLORS.primary,
    width: 295,
    ...SHADOWS.light,
    borderRadius: 6,
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
  },
  reqList: {
    height: 700,
  },
});

export default MyRequest_screen;
