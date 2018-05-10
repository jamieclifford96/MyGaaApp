import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,ImageBackground,Dimensions,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackgroundTheme from '../views/BackgroundTheme';
//import FixtureListScreen from './pages/FixtureList.js';
//import News from './pages/ClubNews.js';
//import ClubMerchandiseScreen from './pages/ClubMerchandise.js';
//import ClubLottoScreen from './pages/ClubLotto.js';
//import MatchReportsScreen from './pages/MatchReports.js';
//import NewsDetails from './pages/NewsDetails.js';


class HomeScreen extends React.Component{
 
   constructor(props) {
       super(props)
       let windowWidth = Dimensions.get('window').width;
    this.state = {
        thumbnailSize :{
            width : windowWidth,
            height :windowWidth * 0.3
          }
        
    }
   };
  
   static navigationOptions = {
    showNavigationBar: false
   };
   render() {
        return (
          <BackgroundTheme style={{backgroundColor: 'rgba(0,0,0,0.9)'}}>
          <View style={styles.container}>
         
          
            <View style={styles.firstrow}>
            <Image style={{ height: this.state.thumbnailSize.width/3, width: this.state.thumbnailSize.width *0.9, marginTop: 100, marginLeft: 20}} source={require("../images/gaa_logo.png")}/>
            </View>
            <View style={styles.secondrow}>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)',flexDirection: 'row', height: this.state.thumbnailSize.height, width: this.state.thumbnailSize.width, borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white'}}>
                <View style={styles.iconbutton}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('News')}>
                  <View style={{width: 70, height: 70, padding: 11, borderColor: 'white', borderRadius: 45, borderWidth: 3}}>
                    <Image  style={{width: 40, height: 40,  }} source={require("../images/newspaper.png")}/>
                  </View>
                </TouchableHighlight>
                    <Text style={styles.text}>NEWS</Text>
                </View>
                <View style={styles.iconbutton}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('News')}>
                <View style={{width: 70, height: 70, padding: 11, borderColor: 'white', borderRadius: 45, borderWidth: 3}}>
                    <Image  style={{width: 40, height: 40,  }} source={require("../images/trophy.png")}/>
                  </View>
                </TouchableHighlight>
                    <Text style={styles.text}>MATCH</Text>
                </View>
                
                <View  style={styles.iconbutton}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Fixtures')}>
                <View style={{width: 70, height: 70, padding: 11, borderColor: 'white', borderRadius: 45, borderWidth: 3}}>
                    <Image  style={{width: 40, height: 40,  }} source={require("../images/fixture-white.png")}/>
                  </View>
                    </TouchableHighlight>
                    <Text style={styles.text}>FIXTURES</Text>
               
                </View>
                </View>
                <View style={{ backgroundColor: "rgba(0,0,0,0.4)",flexDirection: 'row', height: this.state.thumbnailSize.height, width: this.state.thumbnailSize.width,   borderBottomWidth: 3, borderBottomColor: 'white'}}>
                   <View style={styles.iconbutton}> 
                   <TouchableHighlight onPress={() => this.props.navigation.navigate('ClubLotto')}>
                   <View style={{width: 70, height: 70, padding: 11, borderColor: 'white', borderRadius: 45, borderWidth: 3}}>
                    <Image  style={{width: 40, height: 40,  }} source={require("../images/lottery.png")}/>
                  </View>
                    </TouchableHighlight>
                    <Text style={styles.text}>LOTTO</Text>
                    
                   </View>
                   <View style={styles.iconbutton}> 
                   <TouchableHighlight onPress={() => this.props.navigation.navigate('ClubMerchandise')}>
                   <View style={{width: 70, height: 70, padding: 11, borderColor: 'white', borderRadius: 45, borderWidth: 3}}>
                    <Image  style={{width: 40, height: 40,  }} source={require("../images/shopping-cart.png")}/>
                  </View>
                    </TouchableHighlight>
                    <Text style={styles.text}>SHOP</Text>
                   </View>
                   <View style={styles.iconbutton}>
                   <TouchableHighlight onPress={() => this.props.navigation.navigate('ContactUs')}>
                   <View style={{width: 70, height: 70, padding: 11, borderColor: 'white', borderRadius: 45, borderWidth: 3}}>
                    <Image  style={{width: 40, height: 40,  }} source={require("../images/phone-receiver.png")}/>
                  </View>
                    </TouchableHighlight>
                    <Text style={styles.text}>CONTACT US</Text>
                    </View>
            </View>
            <View style={styles.fifthrow}>
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
        paddingLeft: 4,
        paddingTop: 4,
        paddingRight: 20,
        paddingTop: 15,
        alignItems: 'center',
        
      },
      text: {
        marginTop: 5,
        color: 'white'
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
