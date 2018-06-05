import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,TouchableOpacity, Linking, Dimensions } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
import Communications from 'react-native-communications';
class ClubMerchandiseScreen extends React.Component{
  constructor(props) {
    super(props);

    let windowWidth = Dimensions.get('window').width;

    this.state = {         
      screenWidth : windowWidth,   
      shopURL : "https://www.oneills.com/shop-by-team/gaa/ireland/garrycastle-gaa.html",
    };

    
  } 


  static navigationOptions = {
    title : "Club Gear Shop"
  };

  gotoONeills(){
    Linking.canOpenURL(this.state.shopURL).then(supported => {
      if (supported) {
        Linking.openURL(this.state.shopURL);
      } else {
        console.log("Don't know how to open URI: " + this.state.shopURL);
      }
    });
  }

  render() {
    return (
      <BackgroundTheme>     
        <View style={{flex: 1}}>

          <View style={{backgroundColor: 'rgba(0,0,0,0.4)', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white',marginTop: 20, marginBottom: 20}}>   
                   
            <Text style={{fontSize: 23, color : 'white', textAlign: 'center', padding:5 }}>Our Club is happy to announce the availability of club gear which can now be purchased by emailing or calling by clicking the buttons at the bottom of the pa</Text>
          </View>
          
          {/* Shop Button */}
          <TouchableOpacity 
              style={{
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderWidth: 3,
                borderColor: '#fff',
                margin: 5,    
              }} 
              activeOpacity={0.5}
              onPress={() =>this.gotoONeills()}> 
              <Image source={require('../images/shopping-cart-large.png')} style={{
                paddingBottom : 10,
                height: 150,
                width: 150,
                resizeMode : 'stretch',    
              }} /> 
              <Text style={{ 
                fontSize: 40,
                color: "#fff",
                marginBottom : 4, 
                fontFamily: 'arial', 
              }}> Club Gear </Text> 
          </TouchableOpacity>

        </View>
        <Image  style={{width: this.state.screenWidth, height: this.state.screenWidth/5}} source={require("../images/players.png")}/>
      </BackgroundTheme>
    );
  }
}
  export default ClubMerchandiseScreen;