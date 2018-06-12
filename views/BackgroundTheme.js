import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar } from 'react-native';

class BackgroundTheme extends React.Component{
   
   
    render(){
        
        return (

        <ImageBackground style={{
            flex: 1,
            alignItems: 'center',
        }} source={require('../images/pitch.jpeg')}>
 <StatusBar hidden ={false}  backgroundColor="#870202"
     barStyle="light-content"/>
            
            {this.props.children}
            
           </ImageBackground>
        );
    }
}

export default BackgroundTheme;