import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackgroundTheme from '../views/BackgroundTheme';
//import FixtureListScreen from './pages/FixtureList.js';
//import News from './pages/ClubNews.js';
//import ClubMerchandiseScreen from './pages/ClubMerchandise.js';
//import ClubLottoScreen from './pages/ClubLotto.js';
//import MatchReportsScreen from './pages/MatchReports.js';
//import NewsDetails from './pages/NewsDetails.js';

const base64 = require('base-64');
class HomeScreen extends React.Component{
 
   constructor(props) {
       super(props)
       let windowWidth = Dimensions.get('window').width;
    this.state = {
        thumbnailSize :{
            width : windowWidth,
            height :windowWidth * 0.32,
          },
          token: props.navigation.state.params.token,
          username:props.navigation.state.params.username,
          test : props.navigation.state,
          data: {
            token : props.navigation.state.params.token,
            username:props.navigation.state.params.username,
          }
    }
   };
  
   static navigationOptions = {
    showNavigationBar: false
   };

 
   render() {

        return (
          <BackgroundTheme style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
           <StatusBar hidden ={false}  backgroundColor="#000" barStyle="light-content"/>
          <View style={styles.container}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MyBookings', this.state.data)}> 
                <Image style={{width:40, height:40, marginLeft: 10, marginTop: 10}} source={require("../images/menu.png")}/>
              </TouchableOpacity>
            </View> 
            <View style={styles.firstrow}>
            <Image style={{ height: this.state.thumbnailSize.width/1.6, width: this.state.thumbnailSize.width *0.65, marginTop: 0, marginLeft: 65}} source={require("../images/crest.png")}/>
            </View>
            <View style={styles.secondrow}>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)',flexDirection: 'row', height: this.state.thumbnailSize.height, width: this.state.thumbnailSize.width, borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white'}}>
                
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('News', this.state.token)}>
                <Image style={{width: 70, height: 70,  }} source={require("../images/newspaper.png")}/>                    
                <Text style={styles.text}>NEWS</Text>
                
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('MatchReports', this.state.token)}>
                <Image  style={{width: 70, height: 70,  }} source={require("../images/trophy.png")}/>
                <Text style={styles.text}>MATCH REPORTS</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('Fixtures', this.state.token)}>                
                  <Image  style={{width: 70, height: 70,  }} source={require("../images/calendar.png")}/>
                  <Text style={styles.text}>FIXTURES</Text>                  
              </TouchableOpacity>                
               
            </View>
            <View style={{ backgroundColor: "rgba(0,0,0,0.4)",flexDirection: 'row', height: this.state.thumbnailSize.height, width: this.state.thumbnailSize.width,   borderBottomWidth: 3, borderBottomColor: 'white'}}>
                   
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('ClubLotto', this.state.token)}>
                <Image  style={{width: 70, height: 70,  }} source={require("../images/lottery.png")}/>
                <Text style={styles.text}>LOTTO</Text>
              </TouchableOpacity>
                     
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('ClubMerchandise')}>
                <Image  style={{width: 70, height: 70,  }} source={require("../images/shopping-cart.png")}/>
                <Text style={styles.text}>SHOP</Text>
              </TouchableOpacity>
                    
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('ContactUs', this.state.token)}>
                <Image  style={{width: 70, height: 70,  }} source={require("../images/telephone.png")}/>
                <Text style={styles.text}>CONTACT US</Text>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)',flexDirection: 'row', height: this.state.thumbnailSize.height/2, width: this.state.thumbnailSize.width, borderTopWidth: 0, borderBottomWidth: 3, borderColor: 'white'}}>
            <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('BookPitch', this.state.data)}>            
                <Text style={styles.text}>PITCH BOOKING</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          
          </BackgroundTheme>
        );
      }
    }
    export default HomeScreen;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        
        
      },
    
      firstrow: {
        flex: 1,
        
        
      },
    
      secondrow: {
        flex: 1,
       
      },
      iconbutton: {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 4,
        paddingTop: 20,
        alignItems: 'center',
        
      },
      text: {
        marginTop: 1,
        color: 'white',
        fontFamily: 'Open Sans'
        //fontSize: 15
      },
      thirdrow: {
        flex: 1,
        backgroundColor:'rgba(0, 0, 0, 1)',
        marginLeft: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
     
      },
    
      fourthrow: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4ea32f',
        justifyContent: 'flex-end',
        
      },
      fifthrow: {
        paddingTop: 60,
        
        
      }
     
      
    });
