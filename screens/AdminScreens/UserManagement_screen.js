import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { users } from "../../constants/data";
import { COLORS, SIZES } from "../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomSwitch from "../../components/CustomSwitch";

const Item = ({ item }) => (
  <View style={styles.item}>
    <View>
      <Text style={[styles.title]}>{item.userId}</Text>
      <Text style={styles.title}>{item.email}</Text>
      <Text style={styles.title}>{item.phone}</Text>
    </View>
    <View style={styles.actions}>
      <Icon name="pencil" color={COLORS.white} size={SIZES.large} />
      <Icon name="trash-o" color={COLORS.white} size={SIZES.large} />
    </View>
  </View>
);

const UserManagement_screen = () => {
  const [switchIndex, setSwitchIndex] = useState(1);
  const renderItem = ({ item }) => <Item item={item} />;
  const onSelectSwitch = (index) => {
    setSwitchIndex(index);
  };
  return (
    <View style={{ marginTop: 45 }}>
      <View style={{ alignItems: "center", margin: 20 }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={"Students"}
          option2={"Teachers"}
          onSelectSwitch={onSelectSwitch}
          selectionColor={COLORS.primary}
        />
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: COLORS.primary,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: SIZES.font,
    color: COLORS.white,
    lineHeight: 25,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 45,
    marginRight: 15,
  },
});

export default UserManagement_screen;
