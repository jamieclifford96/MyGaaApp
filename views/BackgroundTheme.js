import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';

class BackgroundTheme extends React.Component{
    render(){
        return (
        <ImageBackground style={{
            flex: 1,
            alignItems: 'center',
        }} source={require('../images/stadium-seats-red.png')}>
            {this.props.children}
            
           </ImageBackground>
        );
    }
}

export default BackgroundTheme;