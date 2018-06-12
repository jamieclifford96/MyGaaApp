import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,TextInput,StyleSheet, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
import ConfirmButton from '../components/ConfirmButton.js';


class AddMatchReportScreen extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
        home_team_name : "",
        home_team_goals : 0,
        home_team_points :0,
        home_team_fullscore : "",
        away_team_fullscore: "",
        away_team_points :0,
        away_team_goals : 0,
        away_team_name : "",
        division: "",
        date_of_match : null,    
      }
      const token = props.navigation.state.params.token;
    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json");
    
    fetch("http://86.41.137.78:8000/gaaservice/webapi/results/", {
            
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                home: this.state.home_team_name,
                away: this.state.away_team_name,
                homeScore: this.state.home_team_points,
                awayScore: '',
                division: this.state.division,
                dateTime: ''
              }),
        })
    }  
    static navigationOptions = {
        title: 'Add New Match Report',
      };
  
    scoreBuilder(goals, points)
    {
        let fullscore = "(" + goals + "-" + points + ")";
        return fullscore;
    }  
    render()
    {
        return(
            <BackgroundTheme>
            <View style={styles.container}>    
                <TextInput 
                    placeholder="HOME TEAM NAME" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.hometeamInput = input}
                    onChangeText={(text) => this.setState({home_team_name :text})} />
                <TextInput 
                    placeholder="HOME TEAM GOALS SCORED" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.home_team_goalsInput = input}
                    onChangeText={(text) => this.setState({home_team_goals :text})} />                   
                <TextInput 
                    placeholder="HOME TEAM POINTS SCORED" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.hometeampoints = input}
                    onChangeText={(text) => this.setState({home_team_points :text})} />
                <TextInput 
                    placeholder="AWAY TEAM NAME" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.awayteamnameInput = input}
                    onChangeText={(text) => this.setState({away_team_name :text})} />
                <TextInput 
                    placeholder="AWAY TEAM GOALS" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.awayteamgoals = input}
                    onChangeText={(text) => this.setState({away_team_goals :text})} />
                <TextInput 
                    placeholder="AWAY TEAM POINTS" 
                    placeholderTextColor="#fff" 
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.awayteampoints = input}
                    onChangeText={(text) => this.setState({away_team_points :text})} />
                    <ConfirmButton onPress={() => this.scoreBuilder(this.state.home_team_goals, this.state.home_team_points)} onPress={() => this.scoreBuilder(this.state.away_team_goals, this.state.away_team_points)}/>
             </View>
            </BackgroundTheme>
                );
    }
}



export default AddMatchReportScreen;
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
    container : {
        alignItems: 'center',
        marginTop: 30,
    }
});