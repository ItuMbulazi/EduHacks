import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Onboarding';
import Login from './components/login';
import SignUp from './components/signup';
import Packages from './components/packages';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Onboarding/>
      <Login/>
      <SignUp/><br></br><br></br><br></br>
      <Packages/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
