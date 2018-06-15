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
          day: ""
      };
    }

static navigationOptions = {
    title: "Booking Calendar"
}
ViewDetailsOfDay(day)
{
    if(this.state.day != day)
    {
        this.state.day = day;
    }
    else
    {
        this.props.navigation.navigate('BookingDay', this.state.token, this.state.day.toString());
    }
}

    render(){
        return(
            <CalendarList onDayPress={(day) => this.ViewDetailsOfDay(day)}>

            </CalendarList>
        )
    }
}
export default BookingCalendarScreen;