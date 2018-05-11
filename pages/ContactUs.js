import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackgroundTheme from '../views/BackgroundTheme';
import AppStyle from '../styles/AppStyle';

class ContactUs extends React.Component {
    constructor(props)
{
    super(props);

    let windowWidth = Dimensions.get('window').width;

    this.state = {      
      thumbnailSize :{
        width : windowWidth,
        height :windowWidth * 0.5
      }
    };
}
   render(){
       return(
       <BackgroundTheme>
        <View style={{  backgroundColor: 'rgba(0,0,0,0.6)',marginTop: 10,width: this.state.thumbnailSize.width, borderBottomWidth: 3, borderTopWidth: 3, borderColor: 'white'}}>
            <Text style={AppStyle.contacttext}>Name: </Text>
            <Text style={{marginTop: 10,color: 'white', marginBottom: 10,fontSize: 20}}>Position: </Text>
            <Text style={AppStyle.contacttext}>Number: </Text>
        </View>
        <View style={{  backgroundColor: 'rgba(0,0,0,0.6)',marginTop: 10,width: this.state.thumbnailSize.width,borderBottomWidth: 3, borderTopWidth: 3, borderColor: 'white'}}>
            <Text style={AppStyle.contacttext}>Name: </Text>
            <Text style={{marginTop: 10,color: 'white', marginBottom: 10,fontSize: 20}}>Position: </Text>
            <Text style={AppStyle.contacttext}>Number: </Text>
        </View>
        <View style={{  backgroundColor: 'rgba(0,0,0,0.6)',marginTop: 10,width: this.state.thumbnailSize.width,borderBottomWidth: 3, borderTopWidth: 3, borderColor: 'white'}}>
            <Text style={AppStyle.contacttext}>Name: </Text>
            <Text style={{marginTop: 10,color: 'white', marginBottom: 10,fontSize: 20}}>Position: </Text>
            <Text style={AppStyle.contacttext}>Number: </Text>
        </View>
        <View style={{  backgroundColor: 'rgba(0,0,0,0.6)',marginTop: 10,width: this.state.thumbnailSize.width,borderBottomWidth: 3, borderTopWidth: 3, borderColor: 'white'}}>
            <Text style={AppStyle.contacttext}>Name: </Text>
            <Text style={{marginTop: 10,color: 'white', marginBottom: 10,fontSize: 20}}>Position: </Text>
            <Text style={AppStyle.contacttext}>Number: </Text>
        </View>
        <View style={{  backgroundColor: 'rgba(0,0,0,0.6)',marginTop: 10,width: this.state.thumbnailSize.width,borderBottomWidth: 3, borderTopWidth: 3, borderColor: 'white'}}>
            <Text style={AppStyle.contacttext}>Name: </Text>
            <Text style={{marginTop: 10,color: 'white', marginBottom: 10,fontSize: 20}}>Position: </Text>
            <Text style={AppStyle.contacttext}>Number: </Text>
        </View>
       </BackgroundTheme>


       );
   }
}
export default ContactUs;