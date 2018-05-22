import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions, TouchableOpacity,ImageBackground } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import { groupBy } from 'lodash';
import BackgroundTheme from '../views/BackgroundTheme.js'

class News extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const token = props.navigation.state.params.token;
    let data = this.getLocalJson();
    let windowWidth = Dimensions.get('window').width;

    this.state = {      
      fixtures : data,
      dataSource :ds.cloneWithRows(data),
      thumbnailSize :{
        width : windowWidth * 1,
        height :windowWidth * 0.5
      }
    };
    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json" );
    
    fetch("http://159.107.167.64:8080/gaaservice/webapi/news", {
      headers: headers
  })
  .then((response) => {
      if(response.status != 200){
        ToastAndroid.show("Oops something went wrong", ToastAndroid.LONG);
      }
      else{
        return response.json();
      }
  })
  .then( (myJson => {
    let payload = this.filterData(myJson);          
    this.setState({                      
      fixtures : payload,
      dataSource :ds.cloneWithRows(payload),
    });
  }))
.done();

    //this.getMoviesFromApiAsync();
  } 

  static navigationOptions = {
    title : "News"
  };

  getLocalJson(){
    return require('../offline-data/news.json');    
  }

  filterData(data){
    if(data.length == 0){
      return [];
    }
    else{
      var reversed = data.reverse();
      return reversed;
    }
    
  }
  renderPost(data){
    const date = new Date(data.dateTime);
    return (
      <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => this.props.navigation.navigate('NewsDetails', data)}> 
        <ImageBackground  
        style={{width: this.state.thumbnailSize.width,marginBottom:5, borderColor: 'white'}} 
        source={{uri: "data:image/jpeg;base64,"+data.thumbnailBase64}}> 
        <View style = {{
          borderBottomWidth: 3,
          backgroundColor: 'rgba(39, 77, 78, 0.7)',
          borderTopWidth: 3,
          flex: 2,
        }}>
          <Text style={{color: 'white', marginLeft: 280, marginTop: 15}}>{date.toDateString()}</Text>
          <Text style={{
            fontSize: 25,
            color: 'white',
            marginLeft:10,
            marginRight:10,
            marginTop: 5
          }}> {data.title} </Text> 
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