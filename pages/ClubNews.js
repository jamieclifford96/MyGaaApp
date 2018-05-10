import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions, TouchableOpacity,ImageBackground } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'

class News extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let data = this.getLocalJson();
    let windowWidth = Dimensions.get('window').width;

    this.state = {      
      fixtures : data,
      dataSource :ds.cloneWithRows(data),
      thumbnailSize :{
        width : windowWidth * 0.9,
        height :windowWidth * 0.5
      }
    };

    //this.getMoviesFromApiAsync();
  } 

  static navigationOptions = {
    title : "News"
  };

  getLocalJson(){
    return require('../offline-data/news.json');    
  }

  renderPost(data){
    return (
      <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => this.props.navigation.navigate('NewsDetails', data)}> 
        <ImageBackground  
        style={{width: this.state.thumbnailSize.width, height: this.state.thumbnailSize.height,marginBottom:10, borderColor: 'white'}} 
        source={{uri: "data:image/jpeg;base64,"+data.thumbnailBase64}}> 
        <View style = {{
          marginTop: 80,
          backgroundColor: 'rgba(0,0,0,.5)',
          alignItems: 'center',
          flex: 2,
        }}>
          <Text style={{
            fontSize: 25,
            color: 'white',
            marginLeft:10,
            marginRight:10,
          }}>{data.title} </Text> 
          {/*<Text style={AppStyle.buttonText}> {data.datetime} </Text>*/} 
        </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  render() {

    return (
      <BackgroundTheme>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>this.renderPost(rowData)}
      />
      </BackgroundTheme>
    );
  }
}

export default News;