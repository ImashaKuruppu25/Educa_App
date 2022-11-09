import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
var {width} = Dimensions.get('window');
import SingleUserCard from './SingleUserCard';

export default function HomeUser({users, navigation}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: '#333',
          textAlign: 'center',
        }}
        >
        User List
      </Text>
      <View style={styles.userCard}>
        {users &&
          users.map(user => (
            <SingleUserCard
              key={user._id}
              user={user}
              navigation={navigation}
            />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  userCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
