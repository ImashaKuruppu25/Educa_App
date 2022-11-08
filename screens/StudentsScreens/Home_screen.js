import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import { FlatGrid } from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";

const Home_screen = ({ route }) => {
  const { courses, name } = route.params;
  const navigation = useNavigation();
  const [inputValue, setInputValue] = React.useState(null);

  //render courses to the flat list

  return (
    <View style={styles.homeContainer}>
      <View>
        <Header username="Imasha" />
      </View>
      <View>
        <Text style={styles.headerText}>What do you want to learn today?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Search"
        />
      </View>
      <View style={styles.subHeaderText}>
        <Text style={{ fontSize: SIZES.medium, fontFamily: FONTS.semiBold }}>
          Courses
        </Text>
        <Text> See all</Text>
      </View>
      {/* grid view for courses */}

      <FlatGrid
        itemDimension={130}
        data={courses}
        style={styles.gridView}
        spacing={0}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SingleCourse", {
                singleCourse: item,
                name: name,
              })
            }
          >
            <View style={styles.itemContainer}>
              <Image source={assets.courseImg1} />
              <View style={{ padding: 10 }}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemCode}>{item.courseName}</Text>
                {/* completion status */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 10,
                  }}
                >
                  <Image source={assets.Slider1} />
                  <Text>5/1</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: { padding: 20 },
  headerText: { color: COLORS.lightGray, fontSize: SIZES.large },
  subHeaderText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 20,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#F2F2F2",
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    color: COLORS.black,
  },

  //grid view theme
  gridView: {
    marginTop: 1,
  },
  itemContainer: {
    borderRadius: 7,
    height: 188,
    width: 169,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginTop: 5,
  },
  itemName: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
  },
  itemCode: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.black,
  },
});

export default Home_screen;
