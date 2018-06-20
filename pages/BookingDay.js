import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class BookingDayScreen extends React.Component{
    constructor(props) {
      super(props);
      
      const day3 = props.navigation.state.params;
      this.state = {
        day: day3
      };
    }

    static navigationOptions = ({ navigation }) => {
    
    const params = navigation.state;
    let dateString = params.dateString;
    return {
        title: dateString
    }
}
componentWillMount()
{
    
    //this.props.navigation.setParams({ day: this.setDay });
}
setDay = () =>
{
    this.setState({day: this.props.day3});
}
    render(){
        return(
           <View>
               <View style={styles.heading}>
                   <Text style={styles.headingText}>{this.state.day}</Text>
               </View>
               <View style={styles.box2}>
                   <View style={styles.times}>

                   </View>
                   <View style={styles.teams}>

                   </View>
               </View>
           </View>       
        )
    }
}

export default BookingDayScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    heading: {
        borderTopWidth: 3,
        borderBottomWidth: 3,
        alignItems: 'center',
    },
    headingText: {
        fontSize: 20,
    },
    box2: {
        flexDirection: 'row',
    },
    times: {
        flex: 1,
        borderRightWidth: 3,
        backgroundColor: 'red',
    },
    teams : {
        flex: 2,
        backgroundColor: 'blue',
    }
  });