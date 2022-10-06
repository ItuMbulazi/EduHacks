import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import background from './images/background.jpg'
import logo from './images/logo.png'



 export default function SignUp(){
  return(

      <ImageBackground style={{flex: 1, width: 390, height: 800}} source={require('./images/background.jpg')}>
        <View>
        <Image source={logo} style={{width:'370px', height:'200px' }}/>

        <Text style={{color:'#726D6D', fontStyle:'normal', fontSize:'36px', textAlign:'center'}}>SINGLE</Text>

<TextInput style={styles.input} placeholder='Username'/>

<TextInput  style={styles.input} placeholder='Email'/>

<TextInput  style={styles.input} placeholder='Phone number'/>

<TextInput  style={styles.input} placeholder='Password'/>

 <TextInput  style={styles.input} placeholder='Confirm Password'/>

 <TouchableOpacity style={styles.btn}><Text style={styles.text}>NEXT</Text></TouchableOpacity>

        
        </View>
      </ImageBackground>

   

  

 

  )
}

const styles = StyleSheet.create({
btn:{
  justifyContent:'center'
},

input:{
backgroundColor:'#D8D6D6',
borderRadius:'30px',
height:'60px',
width:'300px',
marginLeft:'50px',
paddingLeft:"15px",
marginTop:'20px'
},

btn:{
  backgroundColor:'#181752',
  color:'#726D6D',
  width:'120px',
  height:'60px',
  marginTop:'20px',
  borderRadius:'30px',
  marginLeft:'140px'
},

text:{
  color:'#726D6D',
  fontSize:'22px',
  marginLeft:'30px',
  marginTop:'10px'
}
  
  

});