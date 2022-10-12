import * as React from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Vidyeo, AVPlaybackStatus } from 'expo-av';


export default function VideoLoad() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  return (
    <View style={{width:1000,height:1000}} >
<ScrollView>

<Video
        ref={video}
        style={{height:300,marginTop:200,alignSelf:'stretch'}}
     
        source={
          require('./vid.mp4')
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
        
      </View>
</ScrollView>

      

    </View>
  );
}