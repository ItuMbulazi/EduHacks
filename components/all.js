import React,{useState} from 'react';
import { Text, View, TextInput, ImageBackground,
    StyleSheet, Dimensions ,Image,TouchableOpacity,Pressable,ScrollView } from 'react-native';
    import logo from './images/secondlogo.png'
    import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
    import reminder from './images/reminders.png'
    import search from './images/search.png'
    import user from './images/user.png'
    
    import {Button, Card, Title, Paragraph} from 'react-native-paper'

    import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { View, TextInput, ImageBackground,
    StyleSheet, Dimensions,TouchableOpacity,Pressable,ScrollView } from 'react-native';


const specials= ({navigation}) => {
  const pressed =()=>{
navigation.navigate('wasabi')
  }
  return (

     <ImageBackground style={{flex: 1, width: 320, height: 950}} source={require('./images/background.jpg')}>


    <View>

     <Box style={styles.navbar}>
        <View>
          <Image source={logo} style={styles.logoimage} />
        </View>
        <View>
        <TouchableOpacity><Image source={reminder} style={{ width: 20, height: 20,  marginTop:20, marginLeft:30 }} /></TouchableOpacity>
          <TouchableOpacity><Image source={search} style={{ width: 20, height: 20, marginTop:-20, marginLeft:60  }} /></TouchableOpacity>
          <TouchableOpacity><Image source={user} style={{ width: 20, height: 20, marginTop:-20, marginLeft:90  }} /></TouchableOpacity>
           
           
        </View>
      </Box>


         <Box style={styles.optionBtn}>
        <TouchableOpacity style={styles.btn}><Text style={{ color: 'white'}}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={{ color: 'white'}} >Maths</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={{ color: 'white'}}>Maths Lit</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={{ color: 'white'}}>Physics</Text></TouchableOpacity>
      </Box>
    
      <ScrollView horizontal={true}>

<Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
borderColor: "coolGray.600",
backgroundColor: "gray.700"}} _web={{
shadow: 2,
borderWidth: 0
}} _light={{
backgroundColor: "gray.50"
}}>
  <Box>
    <AspectRatio w="100%" ratio={16 / 9}>
      <Image source={{
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    }} alt="image" />
    </AspectRatio>
    <Center bg="violet.500" _dark={{
    bg: "violet.400"
  }} _text={{
    color: "warmGray.50",
    fontWeight: "700",
    fontSize: "xs"
  }} position="absolute" bottom="0" px="3" py="1.5">
      PHOTOS
    </Center>
  </Box>
  <Stack p="4" space={3}>
    <Stack space={2}>
      <Heading size="md" ml="-1">
        The Garden City
      </Heading>
      <Text fontSize="xs" _light={{
      color: "violet.500"
    }} _dark={{
      color: "violet.400"
    }} fontWeight="500" ml="-0.5" mt="-1">
        The Silicon Valley of India.
      </Text>
    </Stack>
    <Text fontWeight="400">
      Bengaluru (also called Bangalore) is the center of India's high-tech
      industry. The city is also known for its parks and nightlife.
    </Text>
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <HStack alignItems="center">
        <Text color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="400">
          6 mins ago
        </Text>
      </HStack>
    </HStack>
  </Stack>
</Box>


   <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
borderColor: "coolGray.600",
backgroundColor: "gray.700"
}} _web={{
shadow: 2,
borderWidth: 0
}} _light={{
backgroundColor: "gray.50"
}}>
  <Box>
    <AspectRatio w="100%" ratio={16 / 9}>
      <Image source={{
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    }} alt="image" />
    </AspectRatio>
    <Center bg="violet.500" _dark={{
    bg: "violet.400"
  }} _text={{
    color: "warmGray.50",
    fontWeight: "700",
    fontSize: "xs"
  }} position="absolute" bottom="0" px="3" py="1.5">
      PHOTOS
    </Center>
  </Box>
  <Stack p="4" space={3}>
    <Stack space={2}>
      <Heading size="md" ml="-1">
        The Garden City
      </Heading>
      <Text fontSize="xs" _light={{
      color: "violet.500"
    }} _dark={{
      color: "violet.400"
    }} fontWeight="500" ml="-0.5" mt="-1">
        The Silicon Valley of India.
      </Text>
    </Stack>
    <Text fontWeight="400">
      Bengaluru (also called Bangalore) is the center of India's high-tech
      industry. The city is also known for its parks and nightlife.
    </Text>
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <HStack alignItems="center">
        <Text color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="400">
          6 mins ago
        </Text>
      </HStack>
    </HStack>
  </Stack>
</Box>


 <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
borderColor: "coolGray.600",
backgroundColor: "gray.700"
}} _web={{
shadow: 2,
borderWidth: 0
}} _light={{
backgroundColor: "gray.50"
}}>
  <Box>
    <AspectRatio w="100%" ratio={16 / 9}>
      <Image source={{
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    }} alt="image" />
    </AspectRatio>
    <Center bg="violet.500" _dark={{
    bg: "violet.400"
  }} _text={{
    color: "warmGray.50",
    fontWeight: "700",
    fontSize: "xs"
  }} position="absolute" bottom="0" px="3" py="1.5">
      PHOTOS
    </Center>
  </Box>
  <Stack p="4" space={3}>
    <Stack space={2}>
      <Heading size="md" ml="-1">
        The Garden City
      </Heading>
      <Text fontSize="xs" _light={{
      color: "violet.500"
    }} _dark={{
      color: "violet.400"
    }} fontWeight="500" ml="-0.5" mt="-1">
        The Silicon Valley of India.
      </Text>
    </Stack>
    <Text fontWeight="400">
      Bengaluru (also called Bangalore) is the center of India's high-tech
      industry. The city is also known for its parks and nightlife.
    </Text>
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <HStack alignItems="center">
        <Text color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="400">
          6 mins ago
        </Text>
      </HStack>
    </HStack>
  </Stack>
</Box>



</ScrollView>


    </View>
    </ImageBackground>
  );
};
export default specials;
const styles = StyleSheet.create({

  navbar:{
    display: 'flex',
    marginTop:30
  },

  logoimage:{
     marginLeft: 15,
     height: 70,
    width: 150,
    

  },


  btn: {
    padding: 18,
    color: 'white',
  },
  

  optionBtn: {
    display: 'flex',
    marginTop:20
  },
   
  box:{
    flexDirection:'column',
    borderRadius:20,
    marginBottom:20,
    margin:15,
    width:270,
   
  }
});