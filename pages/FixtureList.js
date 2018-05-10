import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground, ListView, SectionList, Picker } from 'react-native';
import { groupBy } from 'lodash';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'


class FixtureListScreen extends React.Component{
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let data = this.groupByDivision(this.getLocalJson());

    this.state = {      
      fixtures : data,
      dataSource :ds.cloneWithRows(data)
    };

   
  }   
  
  pickerdisplay(){
    return (
      <BackgroundTheme>
        <Picker
          //selectedValue={"Group 1"}
          style={{ 
            height: 30, 
            width: 150 ,
            color: "#000",
          backgroundColor: '#fff'}
          }
          onValueChange={(itemValue, itemIndex) => this.loadFixtures(itemValue)}>
          <Picker.Item key={0} label="All" value="All" />
          {
            this.state.fixtures.map((i, index) => (
            <Picker.Item key={index++} label={i.division} value={i.division} />
          ))}
        </Picker>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />      
      </BackgroundTheme>
    );
  
  }
  
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert()}
        title="Info"
        color="rgba(150,150,150,1)"
      />
    ),
    };

    getLocalJson(){
      return require('../offline-data/fixtures.json');    
    }
    
  groupByDivision(data){
    let grouped = groupBy(data,(el) => el.group);

    return Object.keys(grouped).map((key) => {
      return {
        division : key,
        fixtures : grouped[key]
      };
    })
  }
  loadFixtures(division){
    if(division === "All"){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.fixtures)
      });
    }else{
      let fixtures = this.state.fixtures.filter(el => el.division === division);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(fixtures)
      });
    }   
  }

  renderRow(row){
      return(
          <View >
          <Text style={AppStyle.fixtureDivisionText}>{row.division}</Text>  
          {        
            row.fixtures.map(function(fixture, index){
              return (
                <View key={index}
                  style={{
                    flexDirection: 'column',
                    //alignItems: 'center',
                    margin :5,
                    padding : 5,
                    backgroundColor: 'rgba(39, 77, 78, 0.7)'
                  }}> 
                  <View style={{ flexDirection: 'row'  }}>                          
                    <Text style={AppStyle.fixtureItemText}>{fixture.home}</Text>  
                    <Text style={AppStyle.fixtureItemText}>VS</Text>        
                    <Text style={AppStyle.fixtureItemText}>{fixture.away}</Text>
                  </View>
                  <View style={{ flexDirection: 'row'  }}>  
                  <Image source={require('../images/datetime.png')} style={AppStyle.fixtureIcon} />         
                    <Text style={AppStyle.fixtureItemText}>{fixture.dateTime}</Text>
                  </View>
                  <View style={{ flexDirection: 'row'  }}>  
                    <Image source={require('../images/venue.png')} style={AppStyle.fixtureIcon} />     
                    <Text style={AppStyle.fixtureItemText}>{fixture.venue}</Text>
                  </View>
                </View>
              );
            })
          }
          </View>
      );
  }
    render(){
      return (
        <BackgroundTheme>
          <Picker
            //selectedValue={"Group 1"}
            style={{ 
              height: 30, 
              width: 150 ,
              color: "#000",
            backgroundColor: '#fff'}
            }
            onValueChange={(itemValue, itemIndex) => this.loadFixtures(itemValue)}>
            <Picker.Item key={0} label="All" value="All" />
            {
              this.state.fixtures.map((i, index) => (
              <Picker.Item key={index++} label={i.division} value={i.division} />
            ))}
          </Picker>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
          />      
        </BackgroundTheme>
      );
    
    }
  }
  export default FixtureListScreen;
  