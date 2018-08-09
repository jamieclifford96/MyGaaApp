import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,TextInput,StyleSheet, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'

const base64 = require('base-64');
class CreateUserScreen extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
          username: "",
          password: "",
          email: "",
      }
      let headers = new Headers();
        let authTokenHeader = "Basic " + base64.encode(this.state.username + ":" + this.state.password);
        //let authTokenHeader = "Basic " + base64.encode("username:password");
        headers.append("Authorization", authTokenHeader );
        
        fetch("http://159.107.166.179:8000/gaaservice/webapi/users", {
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
    
    static navigationOptions = {
        title: 'Create User',
      };
  
      
    
    render()
    {
        return(
            <BackgroundTheme>
            <KeyboardAvoidingView style={styles.keyboard}
        
        behavior='padding'
      >
               <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{marginTop: 100, alignItems: 'center'}}>
                <TextInput 
                    placeholder="EMAIL" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.usernameInput = input}
                    onChangeText={(text) => this.setState({email :text})} />
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
                    <TextInput 
                    placeholder="REPEAT PASSWORD" 
                    placeholderTextColor="#fff" 
                    returnKeyType="go"
                    secureTextEntry
                    autoCapitalize="none"
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                     />
                     <TouchableOpacity>
                     <Image style={{width : 70, height: 70}}source={require("../images/check-mark.png")}/>
                     </TouchableOpacity>
                    
                </View>
                </TouchableWithoutFeedback>
               </View> 
               </KeyboardAvoidingView>
            </BackgroundTheme>
        );
    }
}

export default CreateUserScreen;
const styles = StyleSheet.create({
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
    keyboard :{
        alignItems : 'center',
        flexGrow : 3,
        justifyContent : 'center',
  
    },
});