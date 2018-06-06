import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar, View, Text,Dimensions,TouchableOpacity } from 'react-native';

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);
    
        let windowWidth = Dimensions.get('window').width; 

        this.state = {
          screenWidth : windowWidth,
        }; 
    }
    
    render(){
        
        return (
            <View>
            <TouchableOpacity>           
             <View style={{flexDirection: 'row', width: this.state.screenWidth/1.65, borderWidth: 3, borderColor: 'green', padding: 4, backgroundColor: 'rgba(255,255,255,0.7)'}}>
                <Text style={{color: 'green', fontSize: 20, marginTop:5,marginLeft:60}}>CONFIRM</Text>
                <Image style={{width: 35, height: 35, marginLeft: 5, tintColor: 'green'}} source={require("../images/check-mark.png")}/>              
            </View>
            </TouchableOpacity>
            </View>
        );
    }
}

export default ConfirmButton;