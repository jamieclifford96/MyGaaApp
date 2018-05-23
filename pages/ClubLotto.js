import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image, Props,ImageBackground,Dimensions  } from 'react-native';
import BackgroundTheme from '../views/BackgroundTheme';
class ClubLottoScreen extends React.Component {
  constructor(props){
    super(props);

    let windowWidth = Dimensions.get('window').width;

    const token = props.navigation.state.params.token;

    this.state = {
      screenWidth : windowWidth,
      day : "Monday May 8th 2018",
      results: [99,2,33,4],
      message: ""
    };
    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json" );
   
    fetch("http://86.41.137.78:8000/gaaservice/webapi/lotto", {
            headers: headers
        })
        .then((response) => {
            if(response.status != 200){
              ToastAndroid.show("Oops something went wrong", ToastAndroid.LONG);
            }
            else{
              return response.json();
            }
        })
        .then( (myJson => {
          myJson.sort((a, b) =>{
            let dateA = new Date(a.drawDate);
            let dateB = new Date(b.drawDate);

          
            return dateA - dateB;
          });


          let payload = myJson[myJson.length -1];      
          this.setState({                      
            results : payload.draw ,
            day : payload.drawDate,
            message : payload.message      
          });
        }))
      .done();

  
  }

  
  static navigationOptions = {
      title: 'Club Lotto',
    };

    render(){
      const date = new  Date(this.state.day);
      return(
        <BackgroundTheme>
        
         < View style={{ backgroundColor: 'rgba(39, 77, 78, 0.7)', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white',marginTop:0, marginBottom: 0, width: this.state.screenWidth}}>             
            <Text style={{fontSize: 35, color : 'white', textAlign: 'center'}}>{date.toDateString()}</Text>
          </View>

          <View style={{backgroundColor: 'rgba(0,0,0,0.0)', borderTopWidth: 0, borderBottomWidth: 0, borderColor: 'white', alignItems: 'center'}}> 
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

            <Image  style={{width: 150, height: 135 ,marginBottom: 20}} source={require("../images/loto-jar-inverted.png")}/>
          </View>         
          <View style={{ backgroundColor: 'rgba(39, 77, 78, 0.7)', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white', alignItems: 'center'}}>
          <Text style={{fontSize:22, color : 'white', textAlign: 'center'}}>{this.state.message}</Text>
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