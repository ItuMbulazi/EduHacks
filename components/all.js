import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet, ScrollView
  } from 'react-native';
    import {Card, Paragraph, Button} from 'react-native-paper'
  import background from './images/background.png';
  import logo1 from './images/logo1.png';
  import search from './images/search.png';
  import reminder from './images/reminders.png'
  import user from './images/user.png'
  import steel from './images/steel.jpg'
  import { Box } from '@shopify/react-native-skia';
  import { Title } from 'react-native-paper';
  
  
  
  
  export default function Home({ navigation }) {
  
    const HomePage =()=>{
  navigation.navigate('home')
    }
  
    
    return (
      <ImageBackground source={background} style={{ width: 320 }}>

    
        <Box style={styles.navbar}>
          <View style={styles.mainView}>
            <Image source={logo1} style={styles.Heading} />
          </View>
          <View>
          <TouchableOpacity><Image source={reminder} style={{ width: 20, height: 20,  marginLeft:10, marginTop:30 }} /></TouchableOpacity>
            <TouchableOpacity><Image source={search} style={{ width: 20, height: 20, marginTop:-20, marginLeft:-20  }} /></TouchableOpacity>
            <TouchableOpacity><Image source={user} style={{ width: 20, height: 20, marginTop:-20, marginLeft:40  }} /></TouchableOpacity>
          </View>
        </Box>


  
        <Box style={styles.optionBtn}>
          <TouchableOpacity style={styles.btn}>All</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>Maths</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>Maths Lit</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>Physics</TouchableOpacity>
        </Box>


  
        <View style={styles.videos}>

          <ScrollView>

          <Text style={{color:'#726D6D', fontSize:'16px'}}>Latest Videos</Text>

          <View style={{flexDirection:'row'}}>

          <ScrollView horizontal={true}>

                <View style={styles.box} >
                <Card style={{borderRadius:30}} onPress={HomePage}>
               <Card.Cover source={require('./images/steel.jpg')}/>
               <Card.Content>
              <Title>Algebra</Title>
              <Paragraph style={{color:'#FA4A0C'}}>100 Views</Paragraph>
              </Card.Content>
              <Card.Actions>
            </Card.Actions>
            </Card>
                </View>


                 <View style={styles.box} >
                <Card style={{borderRadius:30}} onPress={HomePage}>
               <Card.Cover source={require('./images/steel.jpg')}/>
               <Card.Content>
              <Title>Algebra</Title>
              <Paragraph style={{color:'#FA4A0C'}}>100 Views</Paragraph>
              </Card.Content>
              <Card.Actions>
            </Card.Actions>
            </Card>
                </View>


                 <View style={styles.box} >
                <Card style={{borderRadius:30}} onPress={HomePage}>
               <Card.Cover source={require('./images/steel.jpg')}/>
               <Card.Content>
              <Title>Algebra</Title>
              <Paragraph style={{color:'#FA4A0C'}}>100 Views</Paragraph>
              </Card.Content>
              <Card.Actions>
            </Card.Actions>
            </Card>
                </View>


                <View style={styles.box}>
                <Card style={{borderRadius:30}} onPress={HomePage}>
               <Card.Cover source={require('./images/classroom.jpg')}/>
               <Card.Content>
              <Title>Wasabi</Title>
              <Paragraph style={{color:'#FA4A0C'}}>R250</Paragraph>
              </Card.Content>
              <Card.Actions>
            </Card.Actions>
            </Card>
              </View>


            </ScrollView>
  
  
  
          </View>
          
          <View style={{flexDirection:'row'}}>

                  <View style={styles.box}>
                   <Card style={{borderRadius:30}} onPress={HomePage}>
               <Card.Cover source={require('./images/classroom.jpg')}/>
               <Card.Content>
              <Title>Wasabi</Title>
              <Paragraph style={{color:'#FA4A0C'}}>R250</Paragraph>
              </Card.Content>
              <Card.Actions>
            </Card.Actions>
            </Card>
                </View>


                <View style={styles.box}>
                 <Card style={{borderRadius:30}} onPress={HomePage}>
               <Card.Cover source={require('./images/classroom.jpg')}/>
               <Card.Content>
              <Title>Wasabi</Title>
              <Paragraph style={{color:'#FA4A0C'}}>R250</Paragraph>
              </Card.Content>
              <Card.Actions>
            </Card.Actions>
            </Card>
              </View>


        </View>
        <Button
        title="Learn More"
        color="gold"
        />
        </ScrollView>

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
      width: 100
    },
    box:{
      flexDirection:'column',
      borderRadius:20,
      marginBottom:20,
      margin:15,
      width:200,
    }
  });