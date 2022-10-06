import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import backgroundImage from './images/backgroundImage.jpg'

function Onboarding() {
  return (
    <View>
      <ImageBackground source={'backgroungImage.jpg'}></ImageBackground>
    </View>
  )
}

export default Onboarding
