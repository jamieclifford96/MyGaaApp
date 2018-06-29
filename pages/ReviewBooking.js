import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, ScrollView, Footer, FooterTab,StatusBar, ToastAndroid} from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

const base64 = require('base-64');

class ReviewBookingScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;

    const token = props.navigation.state.params.token;

        super(props);
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let data =[];
        this.state ={
            width : windowWidth,
            height : windowHeight,
            footerwidth: windowWidth *0.5,
            selectedPitch: "",
            selectedDate: "",
            pitch: props.navigation.state.params.pitch,
            token: props.navigation.state.params.token,
            bookings: props.navigation.state.params.bookings,
            team: props.navigation.state.params.team,
            time: props.navigation.state.params.time,
            date: props.navigation.state.params.date,
            duration: props.navigation.state.params.duration,
            dataSource : ds.cloneWithRows(data),
            selectedTeam: "",
            //token: props.navigation.state.params.token,
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token );
       headers.append("Accept", "application/json");
  
    }
    NextPage()
    {
        let data = {
            pitch : this.state.selectedPitch,
            token : token,
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
    confirmBooking()
    {
        let jsonBody = JSON.stringify({
            id: "27",
            date: this.state.date,
            team: this.state.team,
            pitch: this.state.pitch,
            time: this.state.time,
            duration: this.state.duration
          });

        fetch("http://159.107.219.241:8080/gaaservice/webapi/booking/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.state.token,

            },
            body :jsonBody     
        })
        .then((response) => response.text())
        .then((json) => {
            
        })
        .catch((error)=> {
        alert(error);
        console.log(error);
        });

        
        this.props.navigation.navigate('Home', this.state.token);
        alert("Booking Confirmed!");
    }
    renderRow(row)
    {
        if(row.bookings.time != '09:00:00')
        {
            return(<Text>09:00</Text>);
        }
        else if(row.bookings.time != '10:00:00'){
            return(<Text>10:00</Text>);
        }
        else if(row.bookings.time != '11:00:00'){
            return(<Text>11:00</Text>);
        }
        else if(row.bookings.time != '12:00:00'){
            return(<Text>12:00</Text>);
        }
        else if(row.bookings.time != '13:00:00'){
            return(<Text>13:00</Text>);
        }
        else if(row.bookings.time != '14:00:00'){
            return(<Text>14:00</Text>);
        }
        else if(row.bookings.time != '15:00:00'){
            return(<Text>15:00</Text>);
        }
        else if(row.bookings.time != '16:00:00'){
            return(<Text>16:00</Text>);
        }
        else if(row.bookings.time != '17:00:00'){
            return(<Text>17:00</Text>);
        }
        else if(row.bookings.time != '18:00:00'){
            return(<Text>18:00</Text>);
        }
        else if(row.bookings.time != '19:00:00'){
            return(<Text>19:00</Text>);
        }
        else if(row.bookings.time != '20:00:00'){
            return(<Text>20:00</Text>);
        }
        else if(row.bookings.time != '21:00:00'){
            return(<Text>21:00</Text>);
        }

    }
    showToken()
    {
      console.log(this.props.navigation.state);
      alert(this.state.token);
    }
    getHourText()
    {
        if(this.state.duration == 1)
        {
            return " Hour";
        }
        else
        {
            return " Hours";
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
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Review Booking</Text>
                </View>
                <View style={{flexDirection: 'column', marginTop: this.state.height * 0.01,marginLeft:-this.state.width * 0.45}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,  marginTop: this.state.height * 0.0325, marginRight: this.state.height * 0.03125}} source={require("../images/placeholder.png")}/>
                        </View>
                        <View>
                            <Text style={{color: '#a29eaa',marginTop: this.state.height * 0.0325, fontSize:20 }}> :  {this.state.pitch}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,  marginTop: this.state.height * 0.0625, marginRight: this.state.height * 0.03125}} source={require("../images/calendarGrey.png")}/>
                        </View>
                        <View>
                            <Text style={{color: '#a29eaa',marginTop: this.state.height * 0.0725, fontSize:20 }}> :  {this.state.date}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,  marginTop: this.state.height * 0.0625, marginRight: this.state.height * 0.03125}} source={require("../images/time.png")}/>
                        </View>
                        <View>
                            <Text style={{color: '#a29eaa',marginTop: this.state.height * 0.0725, fontSize:20 }}> :  {this.state.time}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,  marginTop: this.state.height * 0.0625, marginRight: this.state.height * 0.03125}} source={require("../images/hourglass.png")}/>
                        </View>
                        <View>
                            <Text style={{color: '#a29eaa',marginTop: this.state.height * 0.0725, fontSize:20 }}> :  {this.state.duration} {this.getHourText()}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625,  marginTop: this.state.height * 0.0625, marginRight: this.state.height * 0.03125}} source={require("../images/group.png")}/>
                        </View>
                        <View>
                            <Text style={{color: '#a29eaa',marginTop: this.state.height * 0.0725,fontSize:20 }}> :   {this.state.team}</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{flex: 1}}>
                    <View>
                        
                    </View>
                <View style={{position: 'absolute', left:-this.state.footerwidth, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
                <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125}} source={require("../images/folder.png")}/>
                <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                    <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 6</Text></View>
                    <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Confirm Booking</Text></View>
                </View>
                <View>
                    <TouchableOpacity onPress ={() => this.confirmBooking()}>
                        <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/tick.png")}/>
                    </TouchableOpacity>
                </View>
                </View>
                </View>
        
            </BackgroundTheme>
         )
     };
    }
    
    
export default ReviewBookingScreen;

const styles = StyleSheet.create({
text: {
    fontSize: 30,
    color: 'white'
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
}

});
/*  <View>     
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