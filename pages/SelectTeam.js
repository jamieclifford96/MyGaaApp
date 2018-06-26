import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, ScrollView, Footer, FooterTab,StatusBar } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class SelectTeamScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;

        super(props);
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let data =[];
        this.state ={
            width : windowWidth,
            height : windowHeight,
            footerwidth: windowWidth *0.5,
            selectedPitch: "",
            pitch: props.navigation.state.params.pitch,
            token: props.navigation.state.params.token,
            bookings: props.navigation.state.params.bookings,
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
            token : this.state.token
        }
        if(this.state.selectedTeam != "")
        {
           // alert(this.state.selectedPitch);
            this.props.navigation.navigate('ReviewBooking', data);
        }
        else
        {
            alert("Please select a team!")
        }
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
                <View style={{height:this.state.height * 0.125, borderBottomColor: 'white', borderBottomWidth: 3}}>

                </View>
                <View style={{flexDirection: 'row', marginTop: this.state.height * 0.125}}>
               
                
                    <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                        <TouchableOpacity onPress = {(selectedPitch) => this.setState({selectedTeam: "U12"})}>
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>U12</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>
                        <TouchableOpacity onPress = {(selectedPitch) => this.setState({selectedTeam: "U14"})}>
                        <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>U14</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}>
                        <TouchableOpacity onPress = {(selectedPitch) => this.setState({selectedTeam: "U16"})}>
                        <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>U16</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{flex: 1}}>
                    <View>
                        
                    </View>
                <View style={{position: 'absolute', left:-this.state.footerwidth, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
                <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125}} source={require("../images/list.png")}/>
                <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                    <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 5</Text></View>
                    <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Review Booking</Text></View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.NextPage()}>
                        <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/right-arrow.png")}/>
                    </TouchableOpacity>
                </View>
                </View>
                </View>
        
            </BackgroundTheme>
         )
     };
    }
    
    
export default SelectTeamScreen;

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