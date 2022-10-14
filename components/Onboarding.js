import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import One from './components/images/one.png';
import Two from './components/images/two.png';
import Three from './components/images/three.png';
import Four from './components/images/four.png';
import Five from './components/images/five.png';
import logo from './components/images/logo.png';
import lesson from './components/images/lesson.png';

import mainlogo from './components/images/mainlogo.png';

import student from './components/images/student.png';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const images = [
  {
    backgroundImg: One,
    image: mainlogo,
    text: '',
  },
  {
    backgroundImg: One,
    image1: student,
    img1: logo,
    text: 'Are you struggling with Maths, Maths Lit, Physics and Accounting',
  },
  {
    backgroundImg: One,
    img1: logo,
    image1: lesson,
    text: 'WITH THE EduHacks APP, NOW STUDENTS CAN ACCESS EDUCATIONAL  HACKS ONLINE AT THEIR COMFORT',
  },
  {
    backgroundImg: One,
    image2: logo,
    img3: '',
    text: 'No more struggling with Mathematics, Mathematics Literacy, Accounting, and physics ',
  },
];

const WIDTH = Dimensions.get('window').width;

const HEIGHT = Dimensions.get('window').height;

export default function Onboarding() {
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );

      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((e, index) => (
            <ImageBackground
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={e.backgroundImg}>
              <View>
                {e.image == 'firstlogo' ? (
                  <Image source={e.image} style={{  }}></Image>
                ) : (
                  <View>
                    <Image source={e.image} style={{ marginTop: 110, marginLeft: -70 }}></Image>

                    <Image source={e.img1} style={{ width: 399, height: 100, }}></Image>
                    <Image source={e.image1} style={{ width: 400, height: 300, }}></Image>

                    <Image source={e.image2} style={{ width: 399, height: 100, marginTop: -399 }}></Image>

                  </View>
                )}

                <Text style={{ color: '#726D6D', top: '250%', fontSize: 20, right: '8.5%', left: '15.74%', position: 'absolute'}}> {e.text} </Text>
                
              </View>
            </ImageBackground>
          ))}
        </ScrollView>

        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrap: {
    width: 363,
    height: 793,
  },

  wrapDot: {
    position: 'absolute',
    bottom: 50,
    marginBottom: 60,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  dotActive: {
    margin: 3,
    color: 'black',
  },

  dot: {
    margin: 3,
    color: 'red',
  },
});