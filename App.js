import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import background from './components/images/background.jpg'
import Login from './components/login'
import SignUp from './components/signup'
import Packages from './components/packages'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import All from './components/all'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const Stack = createNativeStackNavigator();





export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="all" component={All} /> */}

          <Stack.Screen name="home" component={Home} />

          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="packages" component={Packages} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  }



});