import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';

class BackgroundTheme extends React.Component{
    render(){
        return (
        <ImageBackground style={{
            flex: 1,
            alignItems: 'center',
        }} source={require('../images/pitch.jpeg')}>
            {this.props.children}
            
           </ImageBackground>
        );
    }
}

export default BackgroundTheme;