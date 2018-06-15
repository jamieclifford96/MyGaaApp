import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class BookingDayScreen extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
      };
    }

static navigationOptions = {
    title: "Booking Day"
}

    render(){
        return(
           <Text>TEST</Text> 
        )
    }
}
export default BookingDayScreen;