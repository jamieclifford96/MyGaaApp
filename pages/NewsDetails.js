import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
//import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';


class NewsDetails extends React.Component {
    constructor(params) {
        super(params);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
       let data = params.navigation.state.params.text.split("\n").filter(x => x != "\n");
        let windowWidth = Dimensions.get('window').width;
    
        this.state = {      
          title : params.navigation.state.params.title,
          text : params.navigation.state.params.text,
          datetime : params.navigation.state.params.datetime,
          thumbnailBase64 : params.navigation.state.params.thumbnailBase64,
          dataSource :ds.cloneWithRows(data),
          thumbnailSize :{
            width : windowWidth * 0.9,
            height :windowWidth * 0.5
          }
        };
         //this.getMoviesFromApiAsync();
    } 

  static navigationOptions = {
    title : "Details" 
  };

  render() {
    return (
      <BackgroundTheme>
        <View style={AppStyle.view}>
          <Image style={{width: this.state.thumbnailSize.width, height: this.state.thumbnailSize.height, paddingBottom:10,marginBottom:10}} 
        source={{uri: "data:image/jpeg;base64,"+this.state.thumbnailBase64}}/> 
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(row) => <Text style={{ fontSize: 20, color: 'white' }}> {row} </Text>}
        /> 

          <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </BackgroundTheme>
    );
  }
}

export default NewsDetails;