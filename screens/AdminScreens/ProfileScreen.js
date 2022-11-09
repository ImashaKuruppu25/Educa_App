import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from './Profile';

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Profile navigation={navigation} />
      </ScrollView>
    </View>
  );
}