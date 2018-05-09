import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image, Props  } from 'react-native';

class ClubLottoScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      results: [1,2,33,4]
    };
  }

  buttonTest(){
    let array = this.state.results;
    array[2] = 555;
    this.setState({results : array});
  }
  
  static navigationOptions = {
      title: 'Club Lotto',
    };

    render(){
      return(
    <View style={styles.container}>
      <View style={styles.lottonumbers}>
      <Text>The Lotto numbers for Monday May 8th 2018 were</Text>
      </View>
    <View style={styles.results}>
    <Text> 11, 22, 23, 24 </Text>
    <Text>{this.state.results[2]} </Text>
    <Button title="Press Me" onPress={() => this.buttonTest()}/>
    </View>
    </View>
     );
    
    }
  }


  export default ClubLottoScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
 lottonumbers: {
    alignItems: 'center',
    
 },
 results: {
     alignItems: 'center',
     fontSize: 40,
     
 }
});