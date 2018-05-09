import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image } from 'react-native';

class ClubMerchandiseScreen extends React.Component{
    static navigationOptions = {
      title: 'Club Merchandise',
    };
    render(){
      return(
      <View style ={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Club Merchandise
      </Text>
      <Button
      
              title="Go back"
              onPress={() => this.props.navigation.goBack()}/>
          </View>);
    
    }
  }
  export default ClubMerchandiseScreen;