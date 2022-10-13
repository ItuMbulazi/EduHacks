import * as React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function videoHome() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const Videos = [
    {
      id: "0",
      image:
       require('./images/vid.mp4'),
      name: "wasabi",
      price:'R250'
    },
    {
      id: "1",
      image:
       require('./images/vid.mp4'),
      name: "biscuit",
      price:'R550'
    },
    {
      id: "2",
      image:
       require('./images/vid.mp4'),
      name: "chocolate",
      price:'R300'
    },
    {
      id:'3',
      image:
       require('./images/vid.mp4'),
      name: 'asd',
      price:'R200'
    },
    {
      id: "4",
      image:
       require('./images/vid.mp4'),
      name: "wasabi",
      price:'R250'
    },
    {
      id: "5",
      image:
       require('./images/vid.mp4'),
      name: "biscuit",
      price:'R550'
    },
    {
      id: "6",
      image:
       require('./images/vid.mp4'),
      name: "chocolate",
      price:'R300'
    },
    {
      id:'7',
      image:
       require('./images/vid.mp4'),
      name: 'asd',
      price:'R200'
    },
    {
      id: "8",
      image:
       require('./images/vid.mp4'),
      name: "wasabi",
      price:'R250'
    },
    {
      id: "9",
      image:
      require('./images/vid.mp4'),
      name: "biscuit",
      price:'R550'
    },
    {
      id: "10",
      image:
      require('./images/vid.mp4'),
      name: "chocolate",
      price:'R300'
    },

  ];

  return (
    <View style={{width:1000,height:1000}} >

<ScrollView>
{Videos.map((vid)=>(<><Video
  ref={video}
  style={{height:300,marginTop:200,alignSelf:'stretch'}}

  source={
 vid.image
  }

  useNativeControls
  resizeMode="contain"
  isLooping
  onPlaybackStatusUpdate={status => setStatus(() => status)}
/>
<View >
  <Button color=' blue' style={{width:100,height:100}}
    title={status.isPlaying ? 'Pause' : 'Play'}
    onPress={() =>
      status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
    }
  />
  
</View></> ))}
      
</ScrollView>

      

    </View>
  );
}