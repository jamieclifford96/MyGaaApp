import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import BackgroundTheme from '../views/BackgroundTheme';

const base64 = require('base-64');

export default class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : "",
            password : "",
            isLoggedIn : false
        };
    }

    login(){
        /*
        var headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode(this.state.username + ":" + this.state.password));
        
        fetch("https://url", {
                headers: headers
            })
            .then((response) => {
                if(response.status != 200){

                }
            })
          .done();
        */
        this.props.navigation.navigate('Home');
    }

  render() {
    return (
      <BackgroundTheme>
        <View style={styles.logocontainer}>
            <Image style={{ height: 100, width: 250 }} source={require("../images/gaa_logo-edited.png")}/>
        </View>
        <View style={styles.logocontainer}>
            <TextInput 
                placeholder="username" 
                placeholderTextColor="#fff" 
                returnKeyType="next"
                style={styles.input}
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
                onChangeText={(text) => this.setState({username :text})} />
            <TextInput 
                placeholder="password" 
                placeholderTextColor="#fff" 
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                onChangeText={(text) => this.setState({password :text})} />
            
            <TouchableOpacity style={styles.iconbutton} onPress={() => this.login()}>
                <Image style={{width: 80, height: 80,  }} source={require("../images/login-button.png")}/> 
                <Text style={styles.text}>LOGIN</Text>
              </TouchableOpacity>
        </View>
        
      </BackgroundTheme>
    )
  }
};

const styles = StyleSheet.create({
    logocontainer :{
        alignItems : 'center',
        flexGrow : 1,
        justifyContent : 'center'
    },
    input:{
        height : 50,
        width: 250,
        fontSize: 20,
        color: "#fff",
        padding : 5,
        //backgroundColor: "rgba(0,0,0,0.4)", 
        borderWidth: 3,
        borderColor: '#fff',
        fontFamily: 'arial',  
        alignSelf: 'stretch',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    iconbutton: {
        padding: 20,
        alignItems: 'center',
      
    },
    text:{
        fontSize: 20,
        color: "#fff",
        fontFamily: 'arial', 
        textAlign: 'center',
    }
});
