import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, StatusBar } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class BookPitchScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
        super(props);

        this.state ={
            width : windowWidth,
            height : windowWidth/3,
            selectedPitch: "",
            token: props.navigation.state.params,
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token );
        headers.append("Accept", "application/json");
  
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
            <View style={{height:this.state.height * 0.125, borderBottomColor: 'white', borderBottomWidth: 3, marginTop: this.state.height * 0.25}}>

            </View>
               
            <View style={{height:this.state.height * 0.125, marginTop: this.state.height * 0.50}}>
                <Text style={styles.text}>Pitch Booking</Text>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)',flexDirection: 'row', height: this.state.height/2, width: this.state.width, borderTopWidth: 0, borderBottomWidth: 3, borderColor: 'white', marginTop: this.state.height * 0.75}}>
            <TouchableOpacity style={styles.iconbutton} onPress ={() => this.showToken()}/*={() => this.props.navigation.navigate('BookPitch', this.state.token)}*/>            
                <Text style={styles.text}>VIEW TIMETABLES</Text>
              </TouchableOpacity>
            </View>
            <View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.4)',flexDirection: 'row', height: this.state.height/2, width: this.state.width, borderTopWidth: 0, borderBottomWidth: 3, borderColor: 'white'}}>
            <TouchableOpacity style={styles.iconbutton} onPress={() => this.props.navigation.navigate('SelectPitch', this.state.token)}>            
                <Text style={styles.text}>BOOK A PITCH</Text>
              </TouchableOpacity>
            </View>
            </View>
        </BackgroundTheme>

         )
     };
    }
    
    
export default BookPitchScreen;

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