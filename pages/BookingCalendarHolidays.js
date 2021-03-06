import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity, ScrollView,StatusBar, ToastAndroid } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

const base64 = require('base-64');

class BookingCalendarHolidaysScreen extends React.Component{
    constructor(props) {
      super(props);
    const pitch = props.navigation.state.params.pitch;   
  

    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;




    let data = [];
      this.state = {
        width : windowWidth,
        height : windowHeight,
        footerwidth: windowWidth *0.5,
        freeSlots: 0,
        dataSource : null,
        pitch: props.navigation.state.params.pitch,
        token: props.navigation.state.params.token,
        duration: props.navigation.state.params.duration,
        username: props.navigation.state.params.username,
        bookings: data,
        month: new Date().getMonth().toLocaleString(),
        year: new Date().getFullYear(),
        player: props.navigation.state.params.player,
        date: "",
        startDate: "2018-06-06 00:00:00",
        endDate: "2018-07-07 00:00:00",
        markedStart: "",
        markedEnd: "",
        markedDay: "",
        //markedDay: {'2018-05-16': {selected: true, marked: true, selectedColor: 'blue'}}
      };
    }

static navigationOptions = {
    title: "Booking Calendar"
}

ConfirmHoliday(){
    let headers = new Headers();

    console.log(this.props.navigation.state.params.player);
    headers.append("Authorization", "Basic " + base64.encode("jamie:123") );
    headers.append("Accept", "application/json");
    
    let jsonBody = JSON.stringify(    {
        "endDate": this.state.endDate,
        "player":{
            "firstname": this.state.player.firstname,
            "lastname": this.state.player.lastname,
            "team": this.state.player.team
        },
        "startDate": this.state.startDate
    });
    console.log(jsonBody);

    fetch("http://159.107.166.179:8080/gaaservice/webapi/holiday/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Basic " + base64.encode("jamie"+ ":" + "123"),
            },
            body :jsonBody 
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
        this.props.navigation.navigate('Home', this.state.token);
        alert("Holiday Confirmed!");
        console.log(myJson);
    }))
   
  .done();
}
changeMonth(month)
{
    console.log(month);
    //this.setState({month:month});
}
ViewDetailsOfDay(day)
{
    this.state.markedDay = {};
    this.state.markedDay ={[day.dateString]:{selected: true,selectedColor: "#e50d0d"}}
    date1 = day.dateString;
    console.log(date1);
    this.setState({date:date1});
    let total =0;

    //alert(this.state.dayState);
    //alert(day.dateString);
    for(i =0; i < this.state.bookings.length; i++)
    {
        //alert(this.state.bookings[i].date);
        //alert(daystring)
        let fulldate = date1 + " 00:00:00";
        console.log(fulldate);
        if(this.state.bookings[i].datetime == fulldate && this.state.bookings[i].pitch == this.state.pitch)
        {
            total++;
        }
    }
    console.log(this.state.bookings);
    this.setState({freeSlots: total});
   
}
NextPage()
    {
        let data = {
            pitch : this.state.pitch,
            token : this.state.token,
            bookings: this.state.bookings,
            date: this.state.date,
            duration: this.state.duration,
            username: this.state.username
        }
    
        if(this.state.date != "")
        {
           // alert(this.state.selectedPitch);
            this.props.navigation.navigate('SelectTime', data);
        }
        else
        {
            alert("Please select a Day!")
        }
    }
    showToken()
    {
      console.log(this.props.navigation.state);
      alert(this.state.token);
    }
   

   render(){
        return(
            <BackgroundTheme>
             
            <View>
                <StatusBar backgroundColor='rgb(42,39,45)'/>
            </View>
            <View style={{height:this.state.height * 0.125, borderBottomColor: 'white', borderBottomWidth: 3}}>

            </View>
            <View style={{alignItems: 'center', }}>
                <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Select A Date</Text>
            </View>
            <View style={{height:this.state.height * 0.03125, borderBottomColor: 'white', borderBottomWidth: 3}}>

            </View>
            <View style={{flexDirection: 'row', marginTop: 0}}>
                <View style={{borderBottomWidth: 1, borderBottomColor:"#545359" }}>
                    <Calendar  markedDays={this.state.markedDay} onDayPress={(day) => {this.ViewDetailsOfDay(day)}} style={{width: this.state.width, backgroundColor:"rgb(31,29,35)", borderTopWidth: 1, borderTopColor: "#545359" }} theme={{calendarBackground: 'rgb(31,29,35)', dayTextColor: 'rgb(225,225,225)', todayTextColor: 'rgb(187,144,63)',arrowColor: '#545359', monthTextColor: 'rgb(154,150,162)',} }></Calendar>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,marginTop: this.state.height * 0.025, marginRight: this.state.height * 0.015}} source={require("../images/sun.png")}/>
            <Text style={{marginTop: this.state.height * 0.0416666666666667,fontSize: 15, color: "#fcc602"}}>{this.state.freeSlots} Days Booked</Text>
            </View>
            <View style={{flex: 1}}>
                <View>
                    
                </View>
            <View style={{position: 'absolute', left:-this.state.footerwidth, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125}} source={require("../images/time.png")}/>
            <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 3</Text></View>
                <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Review Holiday</Text></View>
            </View>
            <View>
                <TouchableOpacity  onPress ={() => this.ConfirmHoliday()}>
                    <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/tick.png")}/>
                </TouchableOpacity>
            </View>
            </View>
            </View>
    
        </BackgroundTheme>
        )
    }
}
export default BookingCalendarHolidaysScreen;