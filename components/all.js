import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { View, TextInput, ImageBackground,
    StyleSheet, Dimensions,TouchableOpacity,Pressable,ScrollView } from 'react-native';
import logo from './components/images/secondlogo.png'
import reminder from './components/images/reminders.png'
import search from './components/images/search.png'
import user from './components/images/user.png'
import math from './components/images/math.webp'
import { Video, AVPlaybackStatus } from 'expo-av';

const Example = () => {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (

    <View>

  

    <ImageBackground style={{flex: 1, width: 380, }} source={require('./components/images/background.jpg')}>



     <Box style={styles.navbar}>

        <View>

          <Image source={logo} style={styles.logoimage} />

        </View>


        <View style={{marginLeft:170, marginTop:-70}}>

        <TouchableOpacity><Image source={reminder} style={{ width: 25, height: 25, marginTop:90, marginLeft:-90}} /></TouchableOpacity>
          <TouchableOpacity><Image source={search} style={{ width: 25, height: 25, marginTop:-25, marginLeft:-40}} /></TouchableOpacity>
          <TouchableOpacity><Image source={user} style={{ width: 25, height: 25, marginTop:-25,  }} /></TouchableOpacity>
           
           
        </View>

      </Box>


        <Box style={styles.optionBtn}>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext} >Maths</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Maths Lit</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Physics</Text></TouchableOpacity>
      </Box>


         <Text style={{color:'#726D6D', fontSize:16, marginTop: 20, marginLeft:20, marginBottom:20, }}>Explore</Text>


     
     <ScrollView horizontal={true}>



      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700", height:'auto'}} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
           
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
      backgroundColor: "gray.700",  height:'auto'
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
           <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
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
      backgroundColor: "gray.700",  height:'auto'
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
             <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
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


</ImageBackground>
  
  </View>


  );
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };


const styles = StyleSheet.create({

  navbar:{
    flexDirection:'row',
    marginTop:30,
    width:300
    
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

  btntext:{
   fontWeight:'bold' ,
   fontSize: 16,
   

  },
  

  optionBtn: {
    flexDirection:'row',
    marginTop: 50,
    marginLeft:30,
  },

   video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
   
});