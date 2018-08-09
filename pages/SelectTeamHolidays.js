import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, ScrollView, Footer, FooterTab,StatusBar, ToastAndroid } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import { groupBy } from 'lodash';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';


const base64 = require('base-64');


class SelectTeamHolidaysScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;

        super(props);

        this.state ={
            width : windowWidth,
            height : windowHeight,
            footerwidth: windowWidth *0.5,
            selectedPitch: "",
            pitch: props.navigation.state.params.pitch,
            token: props.navigation.state.params.token,
            bookings: props.navigation.state.params.bookings,
            date: props.navigation.state.params.date,
            duration: props.navigation.state.params.duration,
            time: props.navigation.state.params.time,
            players: [],
            player: "",
            toggle: false,
            toggle2: false,
            toggle3: false,
            selectedTeam: "",
            team: "",
            //token: props.navigation.state.params.token,
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token);
        headers.append("Accept", "application/json");
  
    }
    getPlayers(team){
        let headers = new Headers();
        this.state.player = [];

        let jsonBody = JSON.stringify({
            "team": team,
        });

        headers.append("Authorization", "Basic " + base64.encode("jamie:123") );
        headers.append("Accept", "application/json");
        
        fetch("http://159.107.166.179:8080/gaaservice/webapi/player/team", {
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
          let payload = myJson;          
          this.setState({                      
            players : payload,
            isSpinning: false
          });
        }))
       
      .done();
      console.log(this.state.players);
    }
    NextPage()
    {
        console.log(this.state.token);
        let data = {
            pitch : this.state.pitch,
            token : this.state.token,
            bookings: this.state.bookings,
            date: this.state.date,
            time: this.state.time,
            team: this.state.selectedTeam,
            duration: this.state.duration,
            player: this.state.player,
        }
        if(this.state.selectedTeam != "")
        {
           // alert(this.state.selectedPitch);
            this.props.navigation.navigate('BookingCalendarHolidays', data);
        }
        else
        {
            alert("Please select a team!")
        }
    }
    
    chooseSelected1()
    {

       this.setState({toggle: !this.state.toggle});
       this.setState({selectedTeam:"U12"});
       this.getPlayers("U12");
       if(this.state.toggle2 == true)
       {
         this.state.toggle2 = false;
       }
       if(this.state.toggle3 == true){
       this.setState({toggle3: false});

      
    }
}
    chooseSelected2()
    {
        this.setState({toggle2: !this.state.toggle2});
        this.setState({selectedTeam: "U14"});
        this.getPlayers("U14");
        if(this.state.toggle == true)
        {
          this.state.toggle = false;
        }
        if(this.state.toggle3 == true){
        this.setState({toggle3: false});
        
     }
     
    }
    chooseSelected3()
    {
        this.setState({toggle3: !this.state.toggle3});
        this.setState({selectedTeam: "U16"});
        this.getPlayers("U16");
        if(this.state.toggle2 == true)
        {
          this.state.toggle2 = false;
        }
        if(this.state.toggle == true){
        this.setState({toggle: false});
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
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Choose A Team</Text>
                </View>
                
                <View style={{flexDirection: 'row', marginTop: this.state.height * 0.125}}>
               
                <TouchableOpacity onPress ={() => this.chooseSelected1()}>
                    <View style={[{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}, this.state.toggle && {borderColor:'#fff'}]}>
                        
                            <Text style={[{color:'#a29eaa', marginTop: this.state.height * 0.03125}, this.state.toggle && {color:'#fff'}] }>U12</Text>
                       
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => this.chooseSelected2()}>
                    <View style={[{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}, this.state.toggle2 && {borderColor:'#fff'}]}>
                        
                        <Text style={[{color:'#a29eaa', marginTop: this.state.height * 0.03125}, this.state.toggle2 && {color:'#fff'}]}>U14</Text>
                        
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => this.chooseSelected3()}>
                    <View style={[{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}, this.state.toggle3 && {borderColor:'#fff'}]}>
                       
                        <Text style={[{color:'#a29eaa', marginTop: this.state.height * 0.03125} , this.state.toggle3 && {color:'#fff'}]}>U16</Text>
                        
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginTop: this.state.height * 0.045}}>
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Choose A Player</Text>
                </View>
                <View style={{ borderColor: "#545359", borderWidth: 3, height: this.state.height *0.1}}>
                <Picker
  selectedValue={this.state.player}
  style={{ height: this.state.height * 0.09, width: this.state.width * 0.8, color: "#545359"}}
  onValueChange={(itemValue, itemIndex) => this.setState({player: itemValue})}>
  <Picker.Item key={0} label="All" value="All" />
          { this.state.players.map((i, index) => ( <Picker.Item key={index++} label={i.firstname + " " + i.lastname} value={i}/> ))}
         
</Picker>
</View>
                    <View style={{height: this.state.width * 0.125}} >
    
                    </View>
                <View style={{position: 'absolute', left:this.state.width * 0.01, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
                <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125}} source={require("../images/calendarGrey.png")}/>
                <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                    <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 3</Text></View>
                    <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Select A Date</Text></View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.NextPage()}>
                        <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/right-arrow.png")}/>
                    </TouchableOpacity>
                </View>
                </View>
              
        
            </BackgroundTheme>
         )
     };
    }
    
    
export default  SelectTeamHolidaysScreen;

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