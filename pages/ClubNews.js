import React, { Component } from 'react';
import { Button, View, Text, Image, ListView, Dimensions, TouchableOpacity,ImageBackground, ActivityIndicator,StatusBar } from 'react-native';
import AppStyle from '../styles/AppStyle.js'
import { groupBy } from 'lodash';
import BackgroundTheme from '../views/BackgroundTheme.js'

import Loader from '../components/Loader.js'
class News extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const token = props.navigation.state.params.token;
    let data = [];
    let windowWidth = Dimensions.get('window').width;

    this.state = {      
      fixtures : data,
      isSpinning: true,
      dataSource :ds.cloneWithRows(data),
      visable : false,
      thumbnailSize :{
        width : windowWidth * 1,
        height :windowWidth * 0.5,
        
      }
      
    };
    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json" );
    
    fetch("http://86.41.137.78:8000/gaaservice/webapi/news", {
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
      isSpinning: false
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
        activeOpacity={0.7}
        onPress={() => this.props.navigation.navigate('NewsDetails', data)}> 
        <ImageBackground  
        style={{width: this.state.thumbnailSize.width, borderBottomWidth: 3, borderColor: 'white'}} 
        source={{uri: "data:image/jpeg;base64,"+data.thumbnailBase64}}> 
        <View style = {{
          //borderBottomWidth: 3,
          backgroundColor: '#A81919',
          //borderTopWidth: 3,
          flex: 2,
          height: this.state.thumbnailSize.width * .25,
        }}>
          <Text style={{color: 'white', marginLeft: 280, marginTop: 15}}>{date.toDateString()}</Text>
          <Text style={{
            fontSize: 25,
            color: 'white',
            marginLeft:10,
            marginRight:10,
            marginTop: 5,
            
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
         <StatusBar hidden={false}
    
   />
      { this.state.isSpinning ? <Loader/> : 
      <ListView
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData) =>this.renderPost(rowData)}
      />
      }
      </BackgroundTheme>
    );
  }
}

export default News;