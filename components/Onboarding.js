import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import backgroundImage from './images/backgroundImage.jpg'

function Onboarding() {
  return (
    <View style={{width:1000,height:1000}}>
      
      <ImageBackground style={{width:1000,height:1000}} source={require('./images/backgroundImage.jpg')}></ImageBackground>
    </View>
  )
}

export default Onboarding
