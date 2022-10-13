import * as React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Avatar ,HStack, NativeBaseProvider,Container, Header, Content, VStack,Thumbnail, Text,
StatusBar,Box,IconButton,Icon} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";



export default function ExpertHome() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const Videos = [
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "math video",
      duration:'2mins',
      uploader: "Bophelo",
      views:'12 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "OuT OF THIS WORLD TRICK",
      duration:'39sec',
      uploader: "Itu",
      views:'123,000,000,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "physics hack",
      duration:'1min',
      uploader: "Bianca",
      views:'250 views ',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "MANYAMA MAYAMS MAYAMBELA HACKAMS",
      duration:'5mins',
      uploader: "Manyama",
      views:'1000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "physics hack",
      duration:'1min',
      uploader: "Bianca",
      views:'250 views ',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "OuT OF THIS WORLD TRICK",
      duration:'39sec',
      uploader: "Itu",
      views:'123,000,000,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },

  ];

  return (
< NativeBaseProvider>
    <View style={{height:1000,width:1000}} >
 
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" >

        <VStack space={1}>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="black" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="black" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="black" />} />
          <Avatar bg="green.500" source={require('./images/pp.jpg')}/>
      
        </VStack>
      </Box>

<ScrollView>
{Videos.map((vid)=>(<>
<Video
  ref={video}
  style={{height:300,alignSelf:'stretch',marginTop:40}}

  source={
 vid.image
  }

  useNativeControls
  resizeMode="contain"
  isLooping
  onPlaybackStatusUpdate={status => setStatus(() => status)}
/>
<View >

<HStack style={{marginLeft:20}} justifyContent="center" space={2}>
      <Avatar bg="green.500" style={{marginRight:20}}source={require('./images/pp.jpg')}>
        AJ
      </Avatar>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'900'}}>{vid.title}</Text>
      <Text>{vid.duration}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'500'}}>{vid.uploader}</Text>
      <Text>{vid.views}</Text>
      <Text>{vid.uploadtime}</Text>
      </View>
      </View>
     
    
      </HStack>
  
</View>
 
</> ))}
      
</ScrollView>

      

    </View>
    </ NativeBaseProvider>
  );
}

const styles=StyleSheet.create({
  texts:{
    fontSize:20
  }
})