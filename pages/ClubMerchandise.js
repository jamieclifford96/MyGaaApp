import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,TouchableOpacity, Linking } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
class ClubMerchandiseScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state = {      
      shopURL : "https://www.oneills.com/shop-by-team/gaa/ireland/garrycastle-gaa.html",
    };

  } 

  static navigationOptions = {
    title : "Club Gear Shop"
  };

  gotoONeals(){
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
        <View style={{ 
          flex: 1}}>
        <Text style={AppStyle.fixturesDivisionHeading}> Our Club is happy to announce the availability of club gear which can now be purchased directly from the O'Neills Sports on-line shop. </Text> 
         {/* Shop Button */}
         <TouchableOpacity 
          style={AppStyle.buttonContainer} 
          activeOpacity={0.5}
          onPress={() =>this.gotoONeals()}> 
          <Image source={require('../images/shopping-cart.png')} style={AppStyle.buttonImage} /> 
          <Text style={AppStyle.buttonText}> Club Gear </Text> 
       </TouchableOpacity>
        </View>
      </BackgroundTheme>
    );
  }
}
  export default ClubMerchandiseScreen;