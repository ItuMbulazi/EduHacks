import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import background from './images/background.jpg'
import logo from './images/logo.png'



 export default function Packages(){
  return(
   

      <ImageBackground style={{flex: 1, width: 390, height: 800}} source={require('./images/backgroundImage.png')}>
        <View>

        <Image source={logo} style={{width:'370px', height:'200px' }}/>

<Text style={{color:'#726D6D', fontStyle:'normal', fontSize:'36px', textAlign:'center'}}>Packages</Text>

 <TouchableOpacity style={styles.btn}><Text style={styles.text}>Free</Text>
 <Text style={{color:'#ffff', fontSize:'16px', marginLeft:'60px' }}>You get five free videos</Text>
 </TouchableOpacity>

 
 <TouchableOpacity style={styles.btn}><Text style={styles.text}>Single</Text>
 <Text style={{color:'#ffff', fontSize:'16px', marginLeft:'60px' }}>R100 for unlimited access</Text>
 </TouchableOpacity>

 
 <TouchableOpacity style={styles.btn}><Text style={styles.text}>Group</Text>
 <Text style={{color:'#ffff', fontSize:'16px', marginLeft:'60px' }}>Discount of 25% for a group<br></br> of 20 or more</Text>
 </TouchableOpacity>

 
 <TouchableOpacity style={styles.btn}><Text style={styles.text}>Expert</Text>
 <Text style={{color:'#ffff', fontSize:'16px', marginLeft:'60px' }}>Accredeble uploader</Text>
 </TouchableOpacity>
     
        </View>
      </ImageBackground>
      
   

  


    
  )
}

const styles = StyleSheet.create({


btn:{
  backgroundColor:'#181752',
  color:'#ffff',
  width:'300px',
  height:'100px',
  marginTop:'20px',
  marginLeft:'40px'
},

text:{
  color:'#ffff',
  fontSize:'34px',
  marginLeft:'100px',
  marginTop:'5px'
}
  
  

});