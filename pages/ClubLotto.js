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
      message: "The winner this week was Joe Bloggs"
    };
    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json" );
   /*
    fetch("http://159.107.166.179:8000/gaaservice/webapi/lotto", {
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
*/
  
  }
sortMessage(message)
{
 var test =[];
 test = message.split('.');
 return test;
}
cycleArray(test)
{
  var full = "";
  for(i = 0; i < test.length; i++)
  {
    full += test[i] + "\n\n";
  }
  return full;
}
getDayOfWeek(date)
{

  var day = date.getDay();
  var fullstring = date.toDateString();
  var daystring = fullstring.substr(0,3);
  switch(daystring)
  {
    case "Sun": 
    daystring = "Sunday"
    break;
    case "Mon":
    daystring = "Monday"
    break;
    case "Tue":
    daystring = "Tuesday"
    break;
    case "Wed":
    daystring = "Wednesday"
    break;
    case "Thu":
    daystring = "Thursday"
    break;
    case "Fri":
    daystring = "Friday"
    break;
    case "Sat":
    daystring = "Saturday"
    break;
    default :
    daystring = "Not valid"
    break;

  }
  let monthString = date.toDateString();
  monthString = monthString.substr(4,3);

  switch(monthString)
  {
    case "Jan": 
    monthString = "1"
    break;
    case "Feb":
    monthString = "2"
    break;
    case "Mar":
    monthString = "3"
    break;
    case "Apr":
    monthString = "4"
    break;
    case "May":
    monthString= "5"
    break;
    case "Jun":
    monthString= "6"
    break;
    case "Jul":
    monthString= "7"
    break;
    case "Aug":
    monthString= "8"
    break;
    case "Sep":
    monthString= "9"
    break;
    case "Oct":
    monthString= "10"
    break;
    case "Nov":
    monthString= "11"
    break;
    case "Dec":
    monthString= "12"
    break;
    default :
    monthString = "Not valid"
    break;

  }
  let dateString = date.toDateString();
  dateString = dateString.substr(8,2);
  let yearString =date.toDateString();
  yearString = yearString.substr(11,4);
  let finalstring = date.toDateString();
  finalstring = finalstring.substr(4,12);
  daystring += " - " + dateString + "/" + monthString + "/" + yearString;
  
  return daystring;
}

  static navigationOptions = {
      title: 'Club Lotto',
    };

    render(){
      const date = new  Date(this.state.day);
      var split = this.sortMessage(this.state.message);
      return(
        <BackgroundTheme>
        
         < View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderTopWidth: 0, borderBottomWidth: 3, borderColor: 'white',marginTop:0, marginBottom: 0, width: this.state.screenWidth}}>             
            <Text style={{fontSize: 35, color : 'white', textAlign: 'center'}}>{this.state.day}</Text>
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
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white', alignItems: 'center',width: this.state.screenWidth}}>
          <Text style={{fontSize:18, color : 'white', textAlign: 'center'}}>{this.cycleArray(split)}</Text>
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