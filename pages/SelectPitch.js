import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, ScrollView, Footer, FooterTab,StatusBar } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';


class SelectPitchScreen extends React.Component {
    constructor(props) {
       
        let windowWidth = Dimensions.get('window').width;
        let windowHeight = Dimensions.get('window').height;
        super(props);

       
        this.state ={
            width : windowWidth,
            height : windowHeight,
            footerwidth: windowWidth *0.5,
            selectedPitch: "",
            token:props.navigation.state.params,
            duration: 0,
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token );
       headers.append("Accept", "application/json");
  
    }
    NextPage()
    {
        let data = {
            pitch : this.state.selectedPitch,
            token : this.state.token,
            duration: this.state.duration
        }
        if(this.state.selectedPitch != "" && this.state.duration != 0)
        {
           // alert(this.state.selectedPitch);
            this.props.navigation.navigate('BookingCalendar', data);
        }
        else if(this.state.duration == 0 && this.state.selectedPitch != "")
        {
            alert("Please select a session duration!");
        }
        else if(this.state.selectedPitch =="" && this.state.duration != 0)
        {
            alert("Please select a pitch!")
        }
        else{
            alert("Please select a pitch and a session duration");
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
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Choose A Pitch</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: this.state.height * 0.0625,  marginBottom:this.state.height * 0.0625}}>
                
                <TouchableOpacity onPress = {() => this.setState({selectedPitch: "Main Pitch"})}>
                    <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>Main Pitch</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.setState({selectedPitch: "Training Pitch"})}>
                    <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>                       
                        <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>Training Pitch</Text>    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.setState({selectedPitch: "New Pitch"})}>
                    <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}> 
                        <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>New Pitch</Text>   
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginLeft: this.state.height*0.0325 }}>
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Select The Session Duration </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: this.state.height * 0.0625, alignItems: 'center'}}>
                
                <TouchableOpacity onPress = {() => this.setState({duration: 1})}>
                    <View style={{ borderRadius: 40,width: 80,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.setState({duration: 2})}>
                    <View style={{ borderRadius: 40,width: 80,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>                       
                        <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>2</Text>    
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.setState({duration: 3})}>
                    <View style={{ borderRadius: 40,width: 80,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}> 
                        <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>3</Text>   
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <View>   
                    </View>
                <View style={{position: 'absolute', left:-this.state.footerwidth, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
                <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125,}} source={require("../images/calendarGrey.png")}/>
                <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                    <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 2</Text></View>
                    <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Choose A Date</Text></View>
                </View>
                <View>
                    <TouchableOpacity onPress ={() => this.NextPage()}>
                        <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.09, marginTop: this.state.height * 0.03125}} source={require("../images/right-arrow.png")}/>
                    </TouchableOpacity>
                </View>
                </View>
                </View>
        
            </BackgroundTheme>
         )
     };
    }
    
    
export default SelectPitchScreen;

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
},
stylenew: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor:'white',
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