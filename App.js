import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FixtureListScreen from './pages/FixtureList.js';
import News from './pages/ClubNews.js';
import ClubMerchandiseScreen from './pages/ClubMerchandise.js';
import ClubLottoScreen from './pages/ClubLotto.js';
import CreateUserScreeen from './pages/CreateUser.js';
import MatchReportsScreen from './pages/MatchReports.js';
import NewsDetails from './pages/NewsDetails.js';
import HomeScreen from './pages/HomeScreen.js';
import ContactUs from './pages/ContactUs.js';
import { fromLeft } from 'react-navigation-transitions';
import LoginScreen from './pages/LoginScreen.js';

import AddMatchReportScreen from './pages/AddMatchReport.js';
import { YellowBox } from 'react-native';
import AddFixtureScreen from './pages/AddFixture.js';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Fixtures : {
        screen : FixtureListScreen,
    },
    News : {
        screen : News,
    },
    ClubLotto : {
        screen : ClubLottoScreen,
    },
    NewsDetails: {
      screen: NewsDetails,
    },
    ClubMerchandise: {
      screen: ClubMerchandiseScreen,
    },
    MatchReports: {
      screen: MatchReportsScreen,
    },
    ContactUs : {
      screen: ContactUs,
    },
    AddMatchReport : {
      screen: AddMatchReportScreen,
    },
    CreateUser: {
       screen: CreateUserScreeen,
    },
    AddFixture: {
      screen: AddFixtureScreen,
    },
    Login : {
      screen : LoginScreen,
      navigationOptions: {
        header: null
      }
    }
  },
    {
      initialRouteName: 'Login',
      
    transitionConfig: () => fromLeft(),
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#870202',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      },
    }
  
);

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = 
    {
      group: "Test"
    };
  }

  render() {
    return(
      <RootStack duration={0} />
    );
  }
}
