import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image, Props  } from 'react-native';
import BackgroundTheme from '../views/BackgroundTheme';
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
        <BackgroundTheme>
          <View style={styles.container}>
            <View style={styles.lottonumbers}>
            <Text style={{fontSize: 23, color : 'white'}}>The Lotto numbers for Monday May 8th 2018 were</Text>
            </View>
          <View style={styles.results}>
          
          <Text style={{fontSize: 90, color:'white'}}>{this.state.results[0]},</Text>
          <Text style={{fontSize: 90, color:'white'}}>{this.state.results[1]},</Text>
            <Text style={{fontSize: 90, color:'white'}}>{this.state.results[2]},</Text>
              <Text style={{fontSize: 90, color:'white'}}>{this.state.results[3]},</Text>
           
          </View>
          </View>
       </BackgroundTheme>
     );
    
    }
  }


  export default ClubLottoScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
 lottonumbers: {
    alignItems: 'center',
    
 },
 results: {
     alignItems: 'center',
     borderWidth: 3,
     flexDirection: 'row',
     backgroundColor: 'rgba(0,0,0,0.4)',
     paddingLeft:45,
 }
});