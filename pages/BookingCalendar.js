import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class BookingCalendarScreen extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
          dayState: "damn"
      };
    }

static navigationOptions = {
    title: "Booking Calendar"
}
ViewDetailsOfDay(day)
{
    //alert(this.state.dayState);
    this.state.dayState = day.dateString;
    //alert(day.dateString);
    this.props.navigation.navigate('BookingDay', this.state.dayState);
    
}
   render(){
        return(
            <CalendarList onDayPress={(day) => this.props.dayProps = day.dateString} onDayPress={(day) => this.ViewDetailsOfDay(day)}>

            </CalendarList>
        )
    }
}
export default BookingCalendarScreen;