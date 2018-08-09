import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, StatusBar } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class BookPitchScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
        super(props);

        this.state ={
            width : windowWidth,
            height : windowWidth/3,
            selectedPitch: "",
            token: props.navigation.state.params.token,
            username: props.navigation.state.params.username,
            data: {
                token: props.navigation.state.params.token,
                username: props.navigation.state.params.username,
            }
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token );
        headers.append("Accept", "application/json");
  
    }
    showToken()
   {
     console.log(this.props.navigation.state);
     alert(this.state.username);
   }
     render(){
         return(
        <BackgroundTheme>
            
            <View>
            <StatusBar backgroundColor='rgb(42,39,45)'/>
            </View>
            <View style={{height:this.state.height * 0.125, borderBottomColor: 'white', borderBottomWidth: 3, marginTop: this.state.height * 0.25}}>

            </View>
               
            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)',flexDirection: 'row', height: this.state.height, width: this.state.width, borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white'}}>
                
              <TouchableOpacity style={{marginLeft: this.state.height * .5, marginTop: this.state.height * 0.125}} onPress={() => this.props.navigation.navigate('SelectPitch', this.state.data)}>
                <Image style={{width: 70, height: 70,  }} source={require("../images/placeholderWhite.png")}/>                    
                <Text style={styles.text}>BOOK PITCH</Text>        
              </TouchableOpacity>    
              <TouchableOpacity style={{marginLeft: this.state.height * .5, marginTop: this.state.height * 0.125}} onPress={() => this.props.navigation.navigate('SelectPitchTimetable', this.state.token)}>                
                  <Image  style={{width: 70, height: 70,marginLeft:40 }} source={require("../images/calendarWhite.png")}/>
                  <Text style={styles.text}>VIEW PITCH TIMETABLES</Text>                  
              </TouchableOpacity>
     
              
                            
            </View>    
           
        </BackgroundTheme>

         )
     };
    }
    
    
export default BookPitchScreen;

const styles = StyleSheet.create({
text: {
    color: 'white',
    marginTop: 1,
    fontFamily: 'Open Sans',
    marginRight:5
},
titleOfOptions: {
  
    borderTopWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: '#A81919',
    borderColor: 'white'
},
middleStyle: {
    borderBottomWidth: 3,
    backgroundColor: '#A81919',
    borderColor: 'white'
},

  firstrow: {
    flex: 1,
    
    
  },

  secondrow: {
    flex: 1,
   
  },
  iconbutton: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 4,
    paddingTop: 20,
    alignItems: 'center',
    
  },
    thirdrow: {
    flex: 1,
    backgroundColor:'rgba(0, 0, 0, 1)',
    marginLeft: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
 
  },

  fourthrow: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4ea32f',
    justifyContent: 'flex-end',
    
  },
  fifthrow: {
    paddingTop: 60,
    
    
  }

});
/* 
 <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('SelectTeamHolidays', this.state.token)}>
                <Image  style={{width: 70, height: 70,  }} source={require("../images/sun.png")}/>
                <Text style={styles.text}>HOLIDAYS PLANNER</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('SelectTeamAttendance', this.state.token)}>                
                  <Image  style={{width: 70, height: 70,  }} source={require("../images/contract.png")}/>
                  <Text style={styles.text}>ATTENDENCE</Text>                  
              </TouchableOpacity>      
























<View>     
            <View style={styles.titleOfOptions}>
                <Text style={styles.text}>(1) SELECT A PITCH TO BOOK</Text>
            </View>
            <View  style={{flexDirection: 'row'}}>

                <TouchableOpacity  onPress={() => this.setState({selectedPitch: "Main Pitch"})} >
                <View style={{width: this.state.height, height: this.state.height, backgroundColor:'blue'}}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({selectedPitch: "Training Pitch"})}>
                <View  style={{width: this.state.height, height: this.state.height, backgroundColor:'green'}}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({selectedPitch: "New Pitch"})}>
                <View  style={{width: this.state.height, height: this.state.height, backgroundColor:'red'}}></View>                    
                </TouchableOpacity>
            </View>
            <View style={styles.titleOfOptions}>
                <Text style={styles.text}>PITCH: {this.state.selectedPitch}</Text>
            </View>
            <View style={styles.middleStyle}>
            
                <Text style={styles.text}>(2) SELECT A DATE</Text>
            </View>
            <View>
                 <Button title="Date" onPress={() => this.props.navigation.navigate('BookingCalendar', this.state.token)}>DATE:</Button>
            </View>
            <View style={styles.titleOfOptions}>
                <Text style={styles.text}>DATE:</Text>
            </View>
            <View style={styles.middleStyle}>
                <Text style={styles.text}>(3) SELECT A TEAM</Text>
            </View>
            <View style={styles.middleStyle}>
                 <Picker/>
             </View>
            
            <View style={styles.middleStyle}>
                 <Text style={styles.text}>TEAM:</Text>
            </View>
            <View>
                <ConfirmButton/>
            </View>
        </View> */