import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';

class BackgroundTheme extends React.Component{
    render(){
        return (
        <ImageBackground style={{
            flex: 2,
            alignItems: 'center',
        }} source={require('../images/background2.jpg')}>
            {this.props.children}
            
           </ImageBackground>
        );
    }
}

export default BackgroundTheme;