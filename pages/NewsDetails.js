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
          text : params.navigation.state.params.newsMessage,
          datetime : params.navigation.state.params.datetime,
          
          //thumbnailBase64 : params.navigation.state.params.thumbnailBase64,
          dataSource :ds.cloneWithRows(data),
          thumbnailSize :{
            width : windowWidth * 1,
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
        <View style={{backgroundColor: '#A81919', borderTopWidth: 3, borderBottomWidth: 3, borderColor: 'white', width: this.state.thumbnailSize.width}}>
          {/*<Image style={{width: this.state.thumbnailSize.width*1.2, height: this.state.thumbnailSize.height*1.1, borderWidth: 3, borderColor: 'white'}} 
        source={{uri: "data:image/jpeg;base64,"+this.state.thumbnailBase64}}/>*/} 
        <Text style={{marginBottom: 30, marginLeft: 280, color: 'white'}}> {this.state.datetime} </Text>
        <Text style={{marginBottom: 30, fontSize: 25, color: 'white'}}> {this.state.title} </Text>
        </View>
        <View>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(row) => <Text style={{ backgroundColor: '#C93838',width: this.state.width,fontSize: 20, color: 'white', paddingLeft: 30, paddingRight: 30, paddingTop:0, paddingBottom: 10 }}> {row} </Text>}
        />
        </View>
      </BackgroundTheme>
    );
  }
}

export default NewsDetails