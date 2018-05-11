import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image, Props,ImageBackground,Dimensions  } from 'react-native';
import BackgroundTheme from '../views/BackgroundTheme';
class ClubLottoScreen extends React.Component {
  constructor(props){
    super(props);

    let windowWidth = Dimensions.get('window').width;

    this.state = {
      screenWidth : windowWidth,
      day : "Monday May 8th 2018",
      results: [99,2,33,4]
    };
  }

  
  static navigationOptions = {
      title: 'Club Lotto',
    };

    render(){
      return(
        <BackgroundTheme>
        
          <View style={{backgroundColor: 'rgba(0,0,0,0.4)', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white',marginTop: 20, marginBottom: 20}}>             
            <Text style={{fontSize: 23, color : 'white', textAlign: 'center'}}>The Lotto numbers for {this.state.day} were</Text>
          </View>

          <View style={{backgroundColor: 'rgba(0,0,0,0.4)', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white', alignItems: 'center'}}> 
            <View style={{ flexDirection: 'row', paddingTop : 20, paddingBottom : 20,  width: this.state.screenWidth }}>
              <ImageBackground style={styles.lottoBall} source={require('../images/loto-ball-inverted.png')}>            
                <Text style={styles.lottoBallText}>{this.state.results[0]}</Text>
              </ImageBackground>
              <ImageBackground style={styles.lottoBall} source={require('../images/loto-ball-inverted.png')}>            
                <Text style={styles.lottoBallText}>{this.state.results[1]}</Text>
              </ImageBackground>
              <ImageBackground style={styles.lottoBall} source={require('../images/loto-ball-inverted.png')}>            
                <Text style={styles.lottoBallText}>{this.state.results[2]}</Text>
              </ImageBackground>
              <ImageBackground style={styles.lottoBall} source={require('../images/loto-ball-inverted.png')}>            
                <Text style={styles.lottoBallText}>{this.state.results[3]}</Text>
              </ImageBackground>
            </View>

            <Image  style={{width: 200, height: 190 ,marginBottom: 20}} source={require("../images/loto-jar-inverted.png")}/>
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
  },
  lottoBall : {
    flex: 2,
    alignItems: 'center',
    width : 50,
    height : 105
  },
  lottoBallText : {
    paddingTop :7, 
    fontSize: 40, 
    color:'white',
    fontWeight: 'bold'
  }
});