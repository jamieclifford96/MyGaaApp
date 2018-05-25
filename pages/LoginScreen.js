import React, { Component } from 'react';
import {StyleSheet, View, Image, StatusBar, Text, TextInput, TouchableOpacity,ToastAndroid, Dimensions, Keyboard, TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import BackgroundTheme from '../views/BackgroundTheme';

const base64 = require('base-64');

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        let windowWidth = Dimensions.get('window').width;
        this.state = {
            username : "",
            password : "",
            isLoggedIn : false,
            authToken : "",
            thumbnailSize :{
                width : windowWidth,
                height :windowWidth * 0.32
              }
        };
    }
    static navigationOptions() {
        header: null
    }
    login(){
        Keyboard.dismiss();
        if(this.state.username.length == 0 ||this.state.username.password == 0){
            ToastAndroid.showWithGravityAndOffset(
                "Username or password is empty",
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                0,
                -200
              );
            return;
        }

        //http://86.41.137.78:8000/gaaservice/webapi/fixture/
        let headers = new Headers();
        let authTokenHeader = "Basic " + base64.encode(this.state.username + ":" + this.state.password);
        //let authTokenHeader = "Basic " + base64.encode("username:password");
        headers.append("Authorization", authTokenHeader );
        
        fetch("http://86.41.137.78:8000/gaaservice/webapi/fixture/0", {
                headers: headers
            })
            .then((response) => {
                if(response.status != 200){
                    ToastAndroid.showWithGravityAndOffset(
                        "Failed to login, check your credentials",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER,
                        0,
                        -200
                      );
                      this.passwordInput.clear();
                      this.usernameInput.clear();
                }
                else{
                    this.setState({
                        isLoggedIn :true,
                        authToken :authTokenHeader
                    });
    
                    this.props.navigation.navigate('Home', { token : this.state.authToken});
                }
            })
          .done();
    }

  render() {
    return (
        
      <BackgroundTheme>
           <StatusBar hidden ={false}  backgroundColor="#000"
     barStyle="light-content"/>
          <KeyboardAvoidingView style={styles.logocontainer}
        
        behavior='padding'
      >
      
      <View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
        <Image style={{ height: this.state.thumbnailSize.width/1.6, width: this.state.thumbnailSize.width *0.65, marginTop: 50,
        
        justifyContent : 'center',}} source={require("../images/crest.png")}/>
        
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.logocontainer}>
            <TextInput 
                placeholder="USERNAME" 
                placeholderTextColor="#fff" 
                returnKeyType="next"
                style={styles.input}
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} 
                ref={(input) => this.usernameInput = input}
                onChangeText={(text) => this.setState({username :text})} />
            <TextInput 
                placeholder="PASSWORD" 
                placeholderTextColor="#fff" 
                returnKeyType="go"
                secureTextEntry
                autoCapitalize="none"
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                onChangeText={(text) => this.setState({password :text})} />
            
            <TouchableOpacity style={styles.iconbutton} onPress={() => this.login()}>
                <Image style={{width: 80, height: 80,  }} source={require("../images/login.png")}/> 
              </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
        </View>
        </KeyboardAvoidingView>
      </BackgroundTheme>
      
    )
  }
};

const styles = StyleSheet.create({
    logocontainer :{
        alignItems : 'center',
        flexGrow : 1,
        justifyContent : 'center',
        
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
    },
  
});
