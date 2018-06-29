import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet, TouchableOpacity,Picker, ScrollView, Footer, FooterTab,StatusBar } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';


class SelectTimeScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;

        super(props);
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let data =[];
const times=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];



        this.state ={
            width : windowWidth,
            height : windowHeight,
            footerwidth: windowWidth *0.5,
            selectedPitch: "",
            selectedTime: "",
            pitch: props.navigation.state.params.pitch,
            token: props.navigation.state.params.token,
            bookings: props.navigation.state.params.bookings,
            duration: props.navigation.state.params.duration,
            date: props.navigation.state.params.date,
            dataSource : ds.cloneWithRows(data),
            available: "",
            //token: props.navigation.state.params.token,
        }
    
        
        let headers = new Headers();
        headers.append("Authorization", this.state.token );
       headers.append("Accept", "application/json");
        
    }

    NextPage()
    {
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
            alert("Please select a Time!")
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
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Open Sans'}}>Choose A Time</Text>
                </View>
                <View style={{height:this.state.height * 0.0625, borderBottomColor: 'white', borderBottomWidth: 3}}>
                    
                </View>
                
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "09:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                                <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>09:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.setState({selectedTime: "10:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>                       
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>10:00</Text>    
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "11:00:00"})}>
                         <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}> 
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>11:00</Text>   
                         </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row',marginTop: this.state.height * 0.015}}>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "12:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                                <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>12:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.setState({selectedTime: "13:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>                       
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>13:00</Text>    
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "14:00:00"})}>
                         <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}> 
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>14:00</Text>   
                         </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row',marginTop: this.state.height * 0.015}}>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "15:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                                <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>15:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.setState({selectedTime: "16:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>                       
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>16:00</Text>    
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "17:00:00"})}>
                         <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}> 
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>17:00</Text>   
                         </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: this.state.height * 0.015}}>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "18:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',}}>
                                <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125} }>18:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.setState({selectedTime: "19:00:00"})}>
                        <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center', marginLeft: this.state.height * 0.01}}>                       
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>19:00</Text>    
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.setState({selectedTime: "20:00:00"})}>
                         <View style={{ borderRadius: 40,width: 120,height: 80,borderWidth: 5,borderColor: '#545359',backgroundColor: 'rgba(0,0,0,0)',alignItems:'center',marginLeft: this.state.height * 0.01}}> 
                            <Text style={{color:'#a29eaa', marginTop: this.state.height * 0.03125}}>20:00</Text>   
                         </View>
                        </TouchableOpacity>
                    </View>
                    
                <View style={{position: 'absolute', left:this.state.width * -0.05, right: 0, bottom: 0, backgroundColor: 'rgb(42,39,45)', width: this.state.width, height: this.state.height * 0.125, flexDirection: 'row'}}>
                <Image style={{width:this.state.height * 0.0625, height:this.state.height * 0.0625, marginLeft: this.state.height * 0.03125, marginTop: this.state.height * 0.03125}} source={require("../images/group.png")}/>
                <View style={{flexDirection: 'column', marginLeft:this.state.height * 0.03125, marginTop: this.state.height * 0.020833333333 }}>
                    <View><Text style={{fontSize: 20, color: '#545359'}}>STEP 4</Text></View>
                    <View><Text style={{fontSize: 25, color: '#a29eaa'}}>Choose A Team</Text></View>
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
    
    
export default SelectTimeScreen;

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