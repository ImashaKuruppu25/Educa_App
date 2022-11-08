import {StyleSheet,Text, Image, View,Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

var {width} = Dimensions.get("window");
var height = Dimensions.get("window").height;

export default function Splash() {
  return (
    <View style={styles.container}>
     <Text>Spalsh.......</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
  },
  img:{
      width: width * 1 - 150,
      height: 200,
      resizeMode:"contain",
      marginBottom:20
  },
  loader:{
      position:"absolute",
      bottom: -150,
      left:20,
  }
});
