import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
  } from 'react-native';
  import secondlogo from './images/secondlogo.png';
  import search from './images/search.png';
  import reminder from './images/reminders.png'
  import user from './images/user.png'
  
  // import { Box } from '@shopify/react-native-skia';
  import { Title } from 'react-native-paper';
  
  
  const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
      inputRange: bgs.map((_, i) => i * width),
      outputRange: bgs.map((bg) => bg)
    })
    return <Animated.View style={[
      StyleSheet.absoluteFillObject, 
      {
        backgroundColor,
      }
    ]}/>
  }
  
  export default function Home({ navigation }) {
    return (
      <ImageBackground source={background} style={{ width: 320 }}>
        <Box style={styles.navbar}>
          <View style={styles.mainView}>
            <Image source={secondlogo} style={styles.Heading} />
          </View>
          <View>
             <Image source={reminder} style={{ width: 20, height: 20,  marginLeft:10, marginTop:30 }} />
            <Image source={search} style={{ width: 20, height: 20, marginTop:-20, marginLeft:-20  }} />
            <Image source={user} style={{ width: 20, height: 20, marginTop:-20, marginLeft:40  }} />
          </View>
        </Box>
  
        <Box style={styles.optionBtn}>
          <TouchableOpacity style={styles.btn}>All</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>Maths</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>Maths Lit</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>Physics</TouchableOpacity>
        </Box>
  
        <View style={styles.videos}>
          <Box style={styles.video1}>
            <TouchableOpacity onPress={() => navigation.navigate('Player')}>
              <Image source={classroom} style={{ width: 320, height: 120 }} />
            </TouchableOpacity>
            <Image />
            <Title>ALGEBRA EP2 l 5min Hack</Title>
            <br></br>
            <Text>Dr Smith . l09 views . 1 hour ago </Text>
          </Box>
  
          <Box style={styles.video2}>
            <TouchableOpacity onPress={() => navigation.navigate('Player')}>
              <Image source={classroom} style={{ width: 320, height: 120 }} />
            </TouchableOpacity>
            <Image />
            <Title>ALGEBRA EP2 l 5min Hack</Title>
            <br></br>
            <Text>Dr Smith . l09 views . 1 hour ago </Text>
          </Box>
  
          <Box style={styles.video3}>
            <TouchableOpacity onPress={() => navigation.navigate('Player')}>
              <Image source={classroom} style={{ width: 320, height: 120 }} />
            </TouchableOpacity>
            <Image />
            <Title>ALGEBRA EP2 l 5min Hack</Title>
            <br></br>
            <Text>Dr Smith . l09 views . 1 hour ago </Text>
          </Box>
  
          <Box style={styles.video4}>
            <TouchableOpacity onPress={() => navigation.navigate('Player')}>
              <Image source={classroom} style={{ width: 320, height: 120 }} />
            </TouchableOpacity>
            <Image />
            <Title>ALGEBRA EP2 l 5min Hack</Title>
            <br></br>
            <Text>Dr Smith . l09 views . 1 hour ago </Text>
          </Box>
        </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    navbar:{
      display: 'flex'
    },
    optionBtn: {
      display: 'flex',
    },
    btn: {
      padding: 18,
      color: 'white',
    },
    mainView: {
      flex: 1,
    },
    Heading: {
      marginLeft: 15,
      height: 80,
      width: 100,
    },
    video1: {},
    video2: {
      marginTop: 20,
    },
    video3: {
      marginTop: 20,
    },
    video4: {
      marginTop: 20,
    },
  });
  