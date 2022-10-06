import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-web';
import backgroundImage from './images/backgroundImage.png'

import firstlogo from './images/firstlogo.png'

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return(
    <ImageBackground style={{flex: 1, width: 390, height: 800}} source={require('./images/backgroundImage.png')}>
    <Onboarding

    pages={[
      {
        image: <Image source={require('./images/firstlogo.png')} />,
        image: <Image source={require('./images/secondlogo.png')} />,
      },
      {
        image: <Image source={require('./images/firstlogo.png')} />,
        image: <Image source={require('./images/secondlogo.png')} />,
        title: 'Are you struggling with Maths, Maths Lit, Physics and Accounting',
      },
      {
        image: <Image source={require('./images/firstlogo.png')} />,
        image: <Image source={require('./images/secondlogo.png')} />,
        title: 'WITH THE EduHacks APP, NOW STUDENTS CAN ACCESS EDUCATIONAL  HACKS ONLINE AT THEIR COMFORT',
      },
    ]}
  />
  </ImageBackground>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
