import { View,StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
    <Text>Loader</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#000",
      justifyContent:"center",
      alignItems:"center",
    },
    loader:{
        position:"absolute",
    }
  });

export default Loader