import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, ScrollView, Footer, FooterTab,StatusBar,ToastAndroid } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import { groupBy } from 'lodash';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

const base64 = require('base-64');
class MyBookingsScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;

        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = [];
        
        let number =9;
        const times=["09:00:00","10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00","18:00:00","19:00:00","20:00:00"];



        this.state ={
            width : windowWidth,
            height : windowHeight,
            footerwidth: windowWidth *0.5,
            selectedPitch: "",
            selectedTime: "",
            test: "",
            pitch: props.navigation.state.params.pitch,
            token: props.navigation.state.params.token,
            bookings: [],
            duration: props.navigation.state.params.duration,
            username: props.navigation.state.params.username,
            date: props.navigation.state.params.date,
            dataSource : ds.cloneWithRows(data),
            available: "",
            button: "BOOK",
            //token: props.navigation.state.params.token,
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token );
        headers.append("Accept", "application/json");
        
        
    }

    getBookings(){
        //console.log(this.state.username);
        let headers = new Headers();
        let JsonBody =JSON.stringify({"bookerID": this.props.navigation.state.params.username});
        
        headers.append("Authorization", "Basic " + base64.encode("jamie:123") );
        headers.append("Accept", "application/json");
        
        fetch("http://159.107.166.179:8080/gaaservice/webapi/booking/bookerid", {
            method: 'POST',
            headers:{
        
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Basic " + base64.encode("jamie"+ ":" + "123"),
            },
            body: JsonBody
        })
        .then((response) => {
            if(response.status != 200){
              ToastAndroid.show("Oops something went wrong", ToastAndroid.LONG);
              console.log("ERROR");
            
            }
            else{
                
                return response.json();
             }
        })
        .then( (myJson => {
          let payload = myJson;          
          this.setState({                      
            bookings : payload,
            dataSource: ds.cloneWithRows(payload), 
            isSpinning: false
          });
         
          //console.log(this.state.bookings);
        }))
       
      .done();

    }
    NextPage()
    {
        console.log(this.state.token);
        let data = {
            pitch : this.state.pitch,
            token : this.state.token,
            bookings: this.state.bookings,
            date: this.state.date,
            time: this.state.selectedTime,
            duration: this.state.duration
        }
       
        if(this.state.selectedTime != "")
        {
           // alert(this.state.selectedPitch);
            this.props.navigation.navigate('SelectTeam', data);
        }
        else
        {
            alert("Please select a Time!");
        }
    }
    groupByTime(data){
        if(data.length == 0){
          return [];
        }
    
         return(data);
        
      }
    renderRow(data)
    {
        console.log(data);
        this.getBookings();
        console.log(this.state);
        let isTaken = false;
        let shortdate = data.substring(0,5);
       
        for( i=0; i < bookings.length;i++)
        {

       
      return(
          <View style={{flexDirection: 'row', height: this.state.height * 0.10, width: this.state.width *0.9, borderTopWidth: 3, borderLeftWidth: 3, borderRightWidth: 3, borderColor: 'rgb(42,39,45)'}}>
              <Text style={{color: '#a29eaa', fontSize: 15, marginTop: this.state.height * 0.03, marginLeft: this.state.height * 0.03, paddingRight: this.state.height * 0.03, borderRightWidth: 3, borderColor: 'rgb(42,39,45)' }}>{bookings[i].date}</Text>
              <Text style={{color: '#a29eaa', fontSize: 15, marginTop: this.state.height * 0.03, marginLeft: this.state.height * 0.03, marginRight: this.state.width * 0.35, borderColor: 'rgb(42,39,45)'}}> {bookings[i].team}</Text>    
          </View>);
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
                <View>
                    <TouchableOpacity  onPress ={() => console.log(this.state.username)}>
                        <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/right-arrow.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginTop: this.state.height * 0.125 }}>
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>My Bookings</Text>
                </View>
                <View style={{height: this.state.height * 0.75, marginBottom: 10}}> 
                    <ListView enableEmptySections={true}  dataSource={this.state.dataSource} renderRow={(data) => this.renderRow(data)}/>
                </View>  
            </BackgroundTheme>
         )
     };
    }
    
    
export default MyBookingsScreen;

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