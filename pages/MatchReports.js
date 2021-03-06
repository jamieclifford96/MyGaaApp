import React, { Component } from 'react';
import { Button, View, Text, Image, StatusBar, ImageBackground, ListView, SectionList, Picker,ToastAndroid, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { groupBy } from 'lodash';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
import Loader from '../components/Loader.js';
import AddMatchReportScreen from './AddMatchReport.js';


class MatchReportScreen extends React.Component{
  constructor(props) {
    console.disableYellowBox = true;
    super(props);
    const token = props.navigation.state.params.token;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let data = this.groupByDivision([]);
    let windowWidth = Dimensions.get('window').width;
    this.state = {      
      fixtures : data,
      dataSource :ds.cloneWithRows(data),
      division : "All",
      width : windowWidth,
      height :windowWidth * 0.5,
      isSpinning: true,
    };

    let headers = new Headers();
    headers.append("Authorization", token );
    headers.append("Accept", "application/json");
    
    this.componentDidMount = () =>
    {
    fetch("http://159.107.166.179:8080/gaaservice/webapi/results/", {
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
          let payload = this.groupByDivision(this.filterData(myJson));          
          this.setState({                      
            fixtures : payload,
            dataSource :ds.cloneWithRows(payload),
            isSpinning: false
          });

          this.props.navigation.setParams({ 
            fixtures: this.state.fixtures,
            setDivision : this._setDivision,
            
           });
        }))
      .done();
      }
  }   
  
  // https://reactnavigation.org/docs/en/header-buttons.html 
  static navigationOptions = ({ navigation }) => {

    const params = navigation.state.params || {};
    const fixtures = params.fixtures || [];

    return {
      headerTitle: 
      <View style={{flexDirection: 'row'}}>
      <View style={{ borderColor: 'white', borderWidth:1,}}> 
        <Picker
        style={{ 
          height: 30, 
          width: 200,
          color: "#fff", 
          //backgroundColor: '#fff'
        }}
        selectedValue={params.division}
        onValueChange={(itemValue, itemIndex) => params.setDivision(itemValue)}>
        <Picker.Item key={0} label="All" value="All" />
          { fixtures.map((i, index) => ( <Picker.Item key={index++} label={i.division} value={i.division}/> ))}
        </Picker>
       
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('AddMatchReport', { token : params.authToken}) }>
          <Image style={{height: 35, width: 35, marginLeft: 50}}source={require('../images/plus.png')}/>
        </TouchableOpacity>
      </View>
      </View>
    };
  };
  
  componentWillMount() {
    this.props.navigation.setParams({ 
      fixtures: this.state.fixtures,
      setDivision : this._setDivision,
      windowWidth: this.state.windowWidth,
      authToken: this.state.authToken
     });
  }

  _setDivision = (division) => {
    this.setState({ division: division });
  };
  
  getLocalJson(){
    return require('../offline-data/fixtures.json');    
  }
    
  groupByDivision(data){
    let grouped = groupBy(data,(el) => el.division);
  
    return Object.keys(grouped).map((key) => {
      return {
        division : key,
        fixtures : grouped[key]
      };
    })
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

checkVictory(row)
{
  var teamA = row.homeScore.split('-');
  var teamB = row.awayScore.split('-');

  if((parseInt((teamA[0] * 3)) + parseInt(teamA[1]))> (parseInt((teamB[0]*3)) + parseInt(teamB[1])))
  {
    return "W";
  }
  else if((parseInt((teamA[0] * 3)) + parseInt(teamA[1]))< (parseInt((teamB[0]*3)) + parseInt(teamB[1])))
  {
    return "L";
  }
  else {
    return "D";
  }
}
formatDate(date){
  return "Test";
}
  renderRow(row){
      return(
          <View>
          <Text style={AppStyle.fixturesDivisionHeading}>{row.division}</Text>  
          {        
            row.fixtures.map((fixture, index) => {
              const date = new Date(fixture.dateTime);
              return (
                <View style={{ marginTop :0,
                  marginBottom: 0,
                  padding : 5,
                  backgroundColor: '#C93838',
                  width : this.state.width,
                 borderBottomWidth: 3,
                 borderBottomColor: 'white',
                 flexDirection: 'row',
                 justifyContent: 'flex-start',}
                 }>
                <View key={index}
                  style={{
                    flexDirection: 'column',
                    width: this.state.width/2
                    //alignItems: 'center',
                   
                    
                  }}> 
                  <View style={{ flexDirection: 'row'  }}>                          
                    <Text style={AppStyle.fixtureItemText}>{fixture.home}</Text>  
                    <Text style={AppStyle.fixtureItemText}>VS</Text>        
                    <Text style={AppStyle.fixtureItemText}>{fixture.away}</Text>
                  </View>
                  <View style={{ flexDirection: 'row'  }}>  
                  <Image source={require('../images/datetime.png')} style={AppStyle.fixtureIcon} />         
                    <Text style={AppStyle.fixtureItemText}>{date.toDateString()}</Text>
                  </View>
                  <View style={{ flexDirection: 'row'  }}>  
                    <Image source={require('../images/venue.png')} style={AppStyle.fixtureIcon} />     
                    <Text style={AppStyle.fixtureItemText}>({fixture.homeScore}) - ({fixture.awayScore})</Text>
                  </View>
                </View>
                <View style={{flexDirection : 'row', marginLeft: this.state.width/3.5, marginTop: 17.5, justifyContent: 'center',flex: 0,borderWidth: 3, borderColor: 'white', width: 60, height: 60, padding: 5}}>
                <Text style={{fontSize: 30, color: 'white'}}>{this.checkVictory(fixture)}</Text>
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
           { this.state.isSpinning ? <Loader/> 
           :        
          <ListView
            dataSource={dataSource}
            enableEmptySections={true}
            renderRow={(rowData) => this.renderRow(rowData)}
          />  }
        </BackgroundTheme>
      );    
    }
  }
  export default MatchReportScreen;