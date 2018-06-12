import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,StyleSheet } from 'react-native';
import AppStyle from '../styles/AppStyle.js';
import BackgroundTheme from '../views/BackgroundTheme.js';
import ConfirmButton from '../components/ConfirmButton.js';

class BookPitchScreen extends React.Component {
    constructor(props) {
       
    let windowWidth = Dimensions.get('window').width;
        super(props);

        this.state ={
            width : windowWidth,
            height : windowWidth/3
        }
        };

     render(){
         return(
        <BackgroundTheme>
        <View>     
            <View>
                <Text>(1) SELECT A PITCH TO BOOK</Text>
            </View>
            <View  style={{flexDirection: 'row'}}>
                <View style={{width: this.state.height, height: this.state.height, backgroundColor:'blue'}}></View>
                <View style={{width: this.state.height, height: this.state.height, backgroundColor:'green'}}></View>
                <View style={{width: this.state.height, height: this.state.height, backgroundColor:'red'}}></View>                    
            </View>
            <View >
                 <Text style={styles.text}>PITCH:</Text>
            </View>
            <View>
                 <Text>DATE:</Text>
            </View>
            <View>
                 <Text>TEAM:</Text>
            </View>
            <View>
                <ConfirmButton/>
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
},


})