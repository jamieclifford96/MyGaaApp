import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity, ScrollView,StatusBar, ToastAndroid } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

const base64 = require('base-64');

class BookingCalendarScreen extends React.Component{
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
        bookings: data,
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      };
    }

static navigationOptions = {
    title: "Booking Calendar"
}
componentWillMount(){
    this.getBookings();
}
getBookings(){
    let headers = new Headers();

    headers.append("Authorization", "Basic " + base64.encode("jamie:123") );
    headers.append("Accept", "application/json");
    
    fetch("http://159.107.219.241:8080/gaaservice/webapi/booking/", {
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
      let payload = myJson;          
      this.setState({                      
        bookings : payload,
        isSpinning: false
      });
    }))
   
  .done();
}
ViewDetailsOfDay(day)
{
    
    //alert(this.state.month);
    let daywithzero = "";
    let monthwithzero = (this.state.month.toPrecision());
    monthwithzero++;

    if(day.day < 10)
    {
        daywithzero = "0"+day.day;
    }
    else{
        daywithzero=day.day;
    }

    if(monthwithzero < 10)
    {
        monthwithzero ="0"+monthwithzero;
    }
    
    let daystring = this.state.year + "-" + monthwithzero + "-" + daywithzero;
    let total = 12;
    //alert(this.state.dayState);
    //alert(day.dateString);
    for(i =0; i < this.state.bookings.length; i++)
    {
        //alert(this.state.bookings[i].date);
        //alert(daystring)
        if(this.state.bookings[i].date == daystring)
        {
            total--;
        }
    }
    this.setState({freeSlots: total});
   
}
NextPage()
    {
        let data = {
            pitch : this.state.selectedPitch,
            token : this.state.token,
            bookings: this.state.bookings,
        }
        if(this.state.selectedPitch != "")
        {
           // alert(this.state.selectedPitch);
            this.props.navigation.navigate('SelectTime', data);
        }
        else
        {
            alert("Please select a Day!")
        }
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
                    <Calendar onDayPress={(day) => {this.ViewDetailsOfDay(day)}} style={{width: this.state.width, backgroundColor:"rgb(31,29,35)", borderTopWidth: 1, borderTopColor: "#545359" }} theme={{calendarBackground: 'rgb(31,29,35)', dayTextColor: 'rgb(225,225,225)', todayTextColor: 'rgb(187,144,63)',arrowColor: '#545359', monthTextColor: 'rgb(154,150,162)',} }></Calendar>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,marginTop: this.state.height * 0.025, marginRight: this.state.height * 0.015}} source={require("../images/running.png")}/>
            <Text style={{marginTop: this.state.height * 0.0416666666666667,fontSize: 15, color: "rgb(72,115,61)"}}>{this.state.freeSlots} Slots Available</Text>
            </View>
            <View style={{flex: 1}}>
                <View>
                    
                </View>
            <View style={{position: 'absolute', left:-this.state.footerwidth, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125}} source={require("../images/time.png")}/>
            <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 3</Text></View>
                <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Choose A Time</Text></View>
            </View>
            <View>
                <TouchableOpacity  onPress ={() => this.NextPage()}>
                    <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/right-arrow.png")}/>
                </TouchableOpacity>
            </View>
            </View>
            </View>
    
        </BackgroundTheme>
        )
    }
}
export default BookingCalendarScreen;