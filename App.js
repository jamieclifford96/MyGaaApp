import React from 'react';
import { View, Text, Button, Icon, Card,StyleSheet,Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import FixtureListScreen from './pages/FixtureList.js';
import News from './pages/ClubNews.js';
import ClubMerchandiseScreen from './pages/ClubMerchandise.js';
import ClubLottoScreen from './pages/ClubLotto.js';
import MatchReportsScreen from './pages/MatchReports.js';
import NewsDetails from './pages/NewsDetails.js';
import HomeScreen from './pages/HomeScreen.js';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  //  Fixtures : {
  //      screen : FixtureListScreen,
  //  },
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
  },
  
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
      <RootStack/>
    );
  }
}