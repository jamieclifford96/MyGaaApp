import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,ImageBackground,Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
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
   }
   
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.firstrow}>
            </View>
            <View style={styles.secondrow}>
            </View>
            <View style={{ backgroundColor: "#119da4",flexDirection: 'row', height: this.state.thumbnailSize.height, width: this.state.thumbnailSize.width, borderStartWidth:3, borderTopWidth: 6, borderBottomWidth: 6}}>
                <View style={styles.iconbutton}>
                    <Image source={require("../images/folded-newspaper.png")}/>
                    <Text style={styles.text}>NEWS</Text>
                </View>
                <View style={styles.iconbutton}>
                    <Image source={require("../images/trophy.png")}/>
                    <Text style={styles.text}>MATCH</Text>
                </View>
                <View  style={styles.iconbutton}>
                    <Image source={require("../images/calendar.png")}/>
                    <Text style={styles.text}>FIXTURES</Text>
                </View>
                </View>
                <View style={{ backgroundColor: "#119da4",flexDirection: 'row', height: this.state.thumbnailSize.height, width: this.state.thumbnailSize.width, borderStartWidth:3,  borderBottomWidth: 6}}>
                   <View style={styles.iconbutton}> 
                    <Image source={require("../images/lottery-game.png")}/>
                    <Text style={styles.text}>LOTTO</Text>
                   </View>
                   <View style={styles.iconbutton}> 
                    <Image source={require("../images/shopping-cart.png")}/>
                    <Text style={styles.text}>SHOP</Text>
                   </View>
                   <View style={styles.iconbutton}>
                    <Image source={require("../images/phone-call.png")}/>
                    <Text style={styles.text}>CONTACT US</Text>
                    </View>
            </View>
          </View>
      

        );
      }
    }
    export default HomeScreen;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#1f2041',
      },
    
      firstrow: {
        flex: 1,
        backgroundColor: "#ffc857"
        
      },
    
      secondrow: {
        flex: 1,
        backgroundColor: "#ffc857"
      },
      iconbutton: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 4,
        paddingTop: 4,
        paddingRight: 20,
        paddingTop: 15,
        alignItems: 'center',
        color: 'white'
      },
      text: {
        color: 'white',
        fontSize: 15
      },
      thirdrow: {
        flex: 1,
        backgroundColor: "#119da4",
        marginLeft: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
     
      },
    
      fourthrow: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#19647e",
        justifyContent: 'flex-end'
      },
     
      
    });
