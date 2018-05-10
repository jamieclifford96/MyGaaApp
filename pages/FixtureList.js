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
      dataSource :ds.cloneWithRows(data),
      division : "ALL"
    };

  }   
  
  // https://reactnavigation.org/docs/en/header-buttons.html 
  static navigationOptions = ({ navigation }) => {

    const params = navigation.state.params || {};
    const fixtures = params.fixtures || [];

    return {
      headerTitle: <Picker
      style={{ 
        height: 30, 
        width: 250 ,
        color: "#000",
      backgroundColor: '#fff'}
      }
      onValueChange={(itemValue, itemIndex) => params.setDivision(itemValue)}>
      <Picker.Item key={0} label="All" value="All" />
        { fixtures.map((i, index) => ( <Picker.Item key={index++} label={i.division} value={i.division}/> ))}
      </Picker>,
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ 
      fixtures: this.state.fixtures,
      setDivision : this._setDivision
     });
  }

  _setDivision = (division) => {
    this.setState({ division: division });
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
      const division = this.state.division;
      const dataSource = (division === "All") 
        ? this.state.dataSource.cloneWithRows(this.state.fixtures) 
        : this.state.dataSource.cloneWithRows(this.state.fixtures.filter(el => el.division === division));    

      return (
        <BackgroundTheme>           
          <ListView
            dataSource={dataSource}
            enableEmptySections={true}
            renderRow={(rowData) => this.renderRow(rowData)}
          /> 
        </BackgroundTheme>
      );    
    }
  }

  export default FixtureListScreen;
  