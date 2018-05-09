import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image } from 'react-native';

class FixtureListScreen extends React.Component{
    static navigationOptions = {
      title: 'Fixture List',
    };


    render(){
      return(
      <View style ={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Fixture List</Text>
      <Button
      
              title="Go back"
              onPress={() => this.props.navigation.goBack()}/>
          </View>);
    
    }
  }
  export default FixtureListScreen;