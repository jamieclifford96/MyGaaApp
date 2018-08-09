import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions,ToastAndroid,Alert,TextInput,StyleSheet, Picker, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
import ConfirmButton from '../components/ConfirmButton.js';



class AddMatchReportScreen extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
        home_team_name : "1",
        home_team_goals : 1,
        home_team_points :1,
        home_team_fullscore : "1-1",
        away_team_fullscore: "1-1",
        away_team_points :1,
        away_team_goals : 1,
        away_team_name : "2",
        division: "U125568",
        date_of_match : new Date(),    
        token: props.navigation.state.params.token,
      }
      
    let headers = new Headers();
    headers.append("Authorization", this.state.token );
    headers.append("Accept", "application/json");
    

    
    /*
    fetch("http://159.107.219.241:8080/gaaservice/webapi/results/", {
            
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token,

            },
            body: JSON.stringify({
                home: this.state.home_team_name,
                away: this.state.away_team_name,
                homeScore: this.state.home_team_fullscore,
                awayScore: this.state.away_team_fullscore,
                division: this.state.division,
                dateTime: this.state.date_of_match.toString(),
              }),
        }) .then((response) => {
            if(response.status != 200){
                ToastAndroid.showWithGravityAndOffset(
                    "Failed to login, check your credentials",
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER,
                    0,
                    -200
                  );
                  
            }
            else {
                Alert.alert(
                    'Success!',
                    'New Result has been added!',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
            }
        })
        .catch(function(error){
            alert(error);
        })
        .done();*/
    }
    static navigationOptions = {
        title: 'Add New Match Report',
      };
  
    scoreBuilder(goals, points)
    {
        let fullscore = goals + "-" + points;
        return fullscore;
    }  
    
    sendNewReport(){

        let jsonBody = JSON.stringify({
            home: this.state.home_team_name,
            away: this.state.away_team_name,
            homeScore: this.state.home_team_fullscore,
            awayScore: this.state.away_team_fullscore,
            division: this.state.division,
            dateTime: this.formatDate(this.state.date_of_match),
          });

          console.log(jsonBody);

        fetch("http://159.107.166.179:8080/gaaservice/webapi/results/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.state.token,

            },
            body :jsonBody,     
        })
        .then((response) => response.text())
        .then((json) => {
            alert(json);
        })
        .catch((error)=> {
        alert(error);
        });
    }

    formatDate(date){
        //2017-10-06T15:32:18.605
        let year = date.getFullYear();
        let month = date.getMonth() +1;
        let day = date.getDate();


        let fullstring = year + "-" + (month <10 ? "0" : "") + month + "-" +(day <10 ? "0" : "") + day + "T00:00:00.000";

        console.log("date formated : " +fullstring)
        return fullstring;
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
                    
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    ref={(input) => this.awayteampoints = input}
                    onChangeText={(text) => this.setState({away_team_points :text})} />
                <Picker selectedValue={this.state.division} style={styles.input} onValueChange={(itemValue) => this.setState({division: itemValue})}>
                <Picker.Item label="U16 League" value="U16 League"/>
                <Picker.Item label="Division 2 ACFL" value="Division 2 ACFL"/>
                <Picker.Item label="Minor League Division 1" value="Minor League Division 1"/>
                <Picker.Item label="Division 4 ACFL" value="Division 4 ACFL"/>
                <Picker.Item label="U14 League" value="U14 League"/>
                <Picker.Item label="Minor League" value="Minor League"/>
                <Picker.Item label="Division 1 Minor League" value="Division 1 Minor League"/>
                </Picker>
                <Button title="Submit"onPress={() => this.sendNewReport()}> Submit </Button>
                    
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