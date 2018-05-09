import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image } from 'react-native';

class MatchReportScreen extends React.Component{
    static navigationOptions = {
      title: 'Match Report',
    };
    render(){
      return(
      <View style ={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Match Report</Text>
      <Button
      
              title="Go back"
              onPress={() => this.props.navigation.goBack()}/>
          </View>);
    
    }
  }
  export default MatchReportScreen;