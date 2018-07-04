import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,TextInput,StyleSheet, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';
//import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class AddFixtureScreen extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        home_team_name : "",
        venue: "",
        away_team_name : "",
        date_of_match : null,
        ref : "",    
      }
      const token = props.navigation.state.params.token;
    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json");
    
    
    }
    static navigationOptions = {
        title: "Add Fixture",
    };
    
render(){
    return(
        <BackgroundTheme>
        
        </BackgroundTheme>
    );
}
}
export default AddFixtureScreen;
const styles = StyleSheet.create({
    input:{
        height : 50,
        width: 250,
        fontSize: 20,
        color: "#fff",
        padding : 5,
        //backgroundColor: "rgba(0,0,0,0.4)", 
        borderWidth: 3,
        borderColor: '#fff',
        fontFamily: 'arial',  
        alignSelf: 'stretch',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },  
    keyboard :{
        alignItems : 'center',
        flexGrow : 3,
        justifyContent : 'center',
  
    },
});
