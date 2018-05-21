import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image,ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity, ListView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackgroundTheme from '../views/BackgroundTheme';
import AppStyle from '../styles/AppStyle';
import Communications from 'react-native-communications';

class ContactUs extends React.Component {
    static navigationOptions = {
        title : "Contact List"
      };
    constructor(props){
    super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
const data = [
    {
      name : "John Doe",
      position : "Coach",
      number : "0871231231",
      email: "johndoe@gmail.com"
    },
    {
      name : "Jane Doe",
      position : "Chairman",
      number : "0861231231",
      email: "johndoe@gmail.com"
    },
    {
      name : "Jacob Smith",
      position : "Member",
      number : "0876543211",
      email: "johndoe@gmail.com"
    }
];
    

    let windowWidth = Dimensions.get('window').width;

    this.state = {   
        contacts : data,
        dataSource: ds.cloneWithRows(data),   
      thumbnailSize :{
        width : windowWidth,
        height :windowWidth * 0.5
      },

    };
}
renderRow(row){
    return(
        <View style={{  backgroundColor: 'rgba(0,0,0,0.6)',marginTop: 10,width: this.state.thumbnailSize.width, borderBottomWidth: 0, borderTopWidth: 3, borderColor: 'white'}}>
            <Text style={AppStyle.contacttext}>Name: {row.name}</Text>
            <Text style={{marginTop: 10,color: 'white', marginBottom: 10,fontSize: 20}}>Position: {row.position}</Text>
            <Text style={AppStyle.contacttext}>Number: {row.number}</Text>
        
        <View style={{ backgroundColor: 'rgba(0,0,0,0.2)',flexDirection: 'row',  width: this.state.thumbnailSize.width, borderTopWidth: 0, borderBottomWidth: 3, borderColor: 'white'}}>
             <TouchableOpacity style={AppStyle.iconbutton} onPress={() => Communications.phonecall(row.number, true)}>
                <Image style={{width: 70, height: 70,  }} source={require("../images/telephone.png")}/>                    
                <Text style={AppStyle.icontext}>CALL</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={AppStyle.iconbutton} onPress={() => Communications.phonecall(row.number, true)}>
                <Image  style={{width: 70, height: 70,  }} source={require("../images/speech-bubble.png")}/>
                <Text style={AppStyle.icontext}>TEXT</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={AppStyle.iconbutton} onPress={() => Communications.phonecall(row.number, true)}>                
                  <Image  style={{width: 70, height: 70,  }} source={require("../images/envelope.png")}/>
                  <Text style={AppStyle.icontext}>EMAIL</Text>                  
              </TouchableOpacity>      
        </View>
        </View>
    )
}
   render(){
       return(
       <BackgroundTheme>
        <ListView dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}/>
       </BackgroundTheme>


       );
   }
}
export default ContactUs;

