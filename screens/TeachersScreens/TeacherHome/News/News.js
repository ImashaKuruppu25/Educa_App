import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { assets } from "../../../../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const DATA = [
  {
    id: 1,
    subject: "Biology",
    title: "The Effects of Temperature on Enzyme Activity and Biology",
    duration: "1 hour ago",
    comments: 4795,
  },
  {
    id: 2,
    subject: "Maths",
    title: "The Effects of Temperature on Enzyme Activity and Biology",
    duration: "1 hour ago",
    comments: 4795,
  },
  {
    id: 3,
    subject: "English",
    title: "The Effects of Temperature on Enzyme Activity and Biology",
    duration: "1 hour ago",
    comments: 4795,
  },
  {
    id: 4,
    subject: "Sinhala",
    title: "The Effects of Temperature on Enzyme Activity and Biology",
    duration: "1 hour ago",
    comments: 4795,
  },
];

export const News = () => {
  return (
    <View
      style={{
        height: "90%",
        flexDirection: "column",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingLeft: 5,
            marginBottom: 10,
            paddingTop: 5,
          }}
        >
          Latest News
        </Text>
        <Text style={{ paddingTop: 5 }}>See all</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          style={{ paddingLeft: 5, paddingRight: 5 }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  height: "30%",
                  borderColor: "gray",
                  borderWidth: 2,
                  borderRadius: 8,
                  height: 140,
                  marginBottom: 20,
                }}
              >
                <View style={{ flex: 3 }}>
                  <Image
                    source={assets.newsT}
                    style={{
                      minWidth: "100%",
                      minHeight: "100%",
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 4,
                    paddingLeft: 5,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        paddingBottom: 5,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {item.subject}
                    </Text>
                    <Text style={{ fontSize: 12, paddingRight: 5 }}>
                      {item.title}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="clock-outline" size={20} />
                      <Text style={{ paddingLeft: 3, paddingBottom: 5 }}>
                        {item.duration}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="message-reply-text-outline" size={18} />
                      <Text style={{ paddingLeft: 3, paddingRight: 5 }}>
                        {item.comments}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
