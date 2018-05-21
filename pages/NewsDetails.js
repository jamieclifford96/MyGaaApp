import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
//import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';


class NewsDetails extends React.Component {
    constructor(params) {
        super(params);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
       let data = params.navigation.state.params.newsMessage.split("\n").filter(x => x != "\n");
        let windowWidth = Dimensions.get('window').width;
    
        this.state = {      
          title : params.navigation.state.params.title,
          text : params.navigation.state.params.newsMessage,
          datetime : params.navigation.state.params.dateTime,
          
          //thumbnailBase64 : params.navigation.state.params.thumbnailBase64,
          dataSource :ds.cloneWithRows(data),
          thumbnailSize :{
            width : windowWidth * 0.9,
            height :windowWidth * 0.5
          }
        };
         //this.getMoviesFromApiAsync();
    } 

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params;

    return {
      title : params.title
    }; 
  };

  componentWillMount() {
    this.props.navigation.setParams({ 
      title: this.state.title
     });
  }

  render() {
    const date = new Date(this.state.datetime);
    return (
      <BackgroundTheme>
        <View style={AppStyle.view}>
          {/*<Image style={{width: this.state.thumbnailSize.width*1.2, height: this.state.thumbnailSize.height*1.1, borderWidth: 3, borderColor: 'white'}} 
        source={{uri: "data:image/jpeg;base64,"+this.state.thumbnailBase64}}/>*/} 
        <Text style={{marginBottom: 30, marginLeft: 30, color: 'white'}}> {date.toDateString()} </Text>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(row) => <Text style={{ backgroundColor:'"rgba(150,150,150,1)"',marginLeft:15, fontSize: 20, color: 'white' }}> {row} </Text>}
        />
        </View>
      </BackgroundTheme>
    );
  }
}

export default NewsDetails