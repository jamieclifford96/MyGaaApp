import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground, ListView, SectionList, Picker,ToastAndroid, Dimensions,ActivityIndicator, TouchableOpacity } from 'react-native';
import { groupBy } from 'lodash';
import AppStyle from '../styles/AppStyle.js'
import BackgroundTheme from '../views/BackgroundTheme.js'
import Loader from '../components/Loader.js';

class FixtureListScreen extends React.Component{
  constructor(props) {
    super(props);

    const token = props.navigation.state.params.token;

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let data = this.groupByDivision(this.getLocalJson());

    let windowWidth = Dimensions.get('window').width;
    
    this.state = {      
      fixtures : data,
      dataSource :ds.cloneWithRows(data),
      division : "All",
      isSpinning: true,
      width : windowWidth,
      height :windowWidth * 0.5
    };

    let headers = new Headers();
    console.log(token);
    headers.append("Authorization", token );
    headers.append("Accept", "application/json");
    
    /* this.componentDidMount = () =>  {
    fetch("http://159.107.166.179:8080/gaaservice/webapi/fixture/", {
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
          console.log(myJson);     
          this.setState({                      
            fixtures : payload,
            
            dataSource :ds.cloneWithRows(payload),
            isSpinning: false
          });

          this.props.navigation.setParams({ 
            fixtures: this.state.fixtures,
            setDivision : this._setDivision
            
           });
        }))
      .done();
      }*/
  }   
  
  // https://reactnavigation.org/docs/en/header-buttons.html 
  static navigationOptions = ({ navigation }) => {

    const params = navigation.state.params || {};
    const fixtures = params.fixtures || [];

    return {
     
      headerTitle: <View style={{flexDirection: 'row'}}><View style={{ borderColor: 'white', borderWidth:1,}}> 

        <Picker
        style={{ 
          height: 30, 
          width:200,
          color: "#fff", 
          //backgroundColor: '#fff'
        }}
        selectedValue={params.division}
        onValueChange={(itemValue, itemIndex) => params.setDivision(itemValue)}>
        <Picker.Item key={0} label="All" value="All" />
          { fixtures.map((i, index) => ( <Picker.Item key={index++} label={i.division} value={i.division}/> ))}
        </Picker>
      </View>
      <View style={{marginLeft: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('AddFixture', { token : params.authToken}) }>
          <Image style={{ height: 35, width: 35, marginLeft: params.windowWidth/9}}source={require('../images/plus.png')}/>
        </TouchableOpacity>
      </View>
      </View>
    };
  };
  
  componentWillMount() {
    this.props.navigation.setParams({ 
      fixtures: this.state.fixtures,
      setDivision : this._setDivision,
      windowWidth: this.windowWidth
     });
  }

  _setDivision = (division) => {
    this.setState({ division: division });
  };
  
  getLocalJson(){
    return require('../offline-data/fixtures.json');    
  }
    
  groupByDivision(data){
    if(data.length == 0){
      return [];
    }

    let grouped = groupBy(data,(el) => el.group);
    
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
    let currentTime = Date.now();
    let twoDaysAgo = new Date(currentTime.year, currentTime.monthIndex, (currentTime.day-2));
    currentTime = twoDaysAgo;
    let placeholder= [];
    data.forEach(element => {
      if (new Date(element.dateTime).getTime() <= currentTime){
        placeholder.push(element);
        
      }
    });
    return placeholder;
  }


formatDate(date){
  return "Test";
}
  renderRow(row){
    console.log(row);
      return(
          <View >
           
          <Text style={AppStyle.fixturesDivisionHeading}>{row.division}</Text>  
          {        
            row.fixtures.map((fixture, index) => {
              const date = new Date(fixture.dateTime);
              return (
                <View key={index}
                  style={{
                    flexDirection: 'column',
                    //alignItems: 'center',
                    marginTop :5,
                    marginBottom: 5,
                    padding : 5,
                    backgroundColor: 'rgba(39, 77, 78, 0.7)',
                    width : this.state.width
                  }}> 
                  <View style={{ flexDirection: 'row'  }}>                          
                    <Text style={AppStyle.fixtureItemText}>{fixture.home}</Text>  
                    <Text style={AppStyle.fixtureItemText}>VS</Text>        
                    <Text style={AppStyle.fixtureItemText}>{fixture.away}</Text>
                  </View>
                  <View style={{ flexDirection: 'row'  }}>  
                  <Image source={require('../images/datetime.png')} style={AppStyle.fixtureIcon} />         
                    <Text style={AppStyle.fixtureItemText}>{date.toUTCString()}</Text>
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
      console.log(this.state.fixtures);
      const dataSource = (division === "All") 
        ? this.state.dataSource.cloneWithRows(this.state.fixtures) 
        : this.state.dataSource.cloneWithRows(this.state.fixtures.filter(el => el.division === division));          

      return (
        <BackgroundTheme>  
          { //this.state.isSpinning ?<Loader/>  :  
          
          <ListView
            dataSource={dataSource}
            enableEmptySections={true}          
            renderRow={(rowData) => this.renderRow(rowData)}
          /> 
          
          }
          
        </BackgroundTheme>
      );    
    }
  }

  export default FixtureListScreen;
  