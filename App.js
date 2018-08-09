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
import BookPitchScreen from './pages/BookPitch.js';
import AddMatchReportScreen from './pages/AddMatchReport.js';
import { YellowBox } from 'react-native';
import AddFixtureScreen from './pages/AddFixture.js';
import BookingCalendarScreen from './pages/BookingCalendar.js';
import BookingDayScreen from './pages/BookingDay.js';
import SelectPitchScreen from './pages/SelectPitch.js';
import SelectTimeScreen from './pages/SelectTime.js';
import ViewTimeScreen from './pages/ViewTime.js';
import SelectTeamScreen from './pages/SelectTeam.js';
import BookingCalendarTimetableScreen from './pages/BookingCalendarTimetable.js';
import SelectPitchTimetableScreen from './pages/SelectPitchTimetable.js';
import ReviewBookingScreen from './pages/ReviewBooking.js';
import  SelectTeamHolidaysScreen from './pages/SelectTeamHolidays.js';
import BookingCalendarHolidaysScreen from './pages/BookingCalendarHolidays.js';
import SelectTeamAttendanceScreen from './pages/SelectTeamAttendance.js';
import BookingCalendarAttendanceScreen from './pages/BookingCalendarAttendance.js';
import SelectBookingScreen from './pages/SelectBooking.js';
import MarkAttendanceScreen from './pages/MarkAttendance.js';
import MyBookingsScreen from './pages/MyBookings.js';
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
    BookingDay: {
      screen: BookingDayScreen,
    },
    MyBookings: {
      screen: MyBookingsScreen,
      navigationOptions: {
        header: null
      }
    },
    BookPitch: {
      screen: BookPitchScreen,
      navigationOptions: {
        header: null
      }
    },
    AddFixture: {
      screen: AddFixtureScreen,
    },
    BookingCalendar: {
      screen: BookingCalendarScreen,
      navigationOptions: {
        header: null
      }
    },
    ReviewBooking:{
      screen:ReviewBookingScreen,
      navigationOptions:{
        header: null
      }
    },
    SelectPitch: {
      screen: SelectPitchScreen,
      navigationOptions: {
        header: null
      }
    },
    MarkAttendance:{
      screen:MarkAttendanceScreen,
      navigationOptions: {
        header: null
      }
    },
    SelectTeamAttendance:{
        screen: SelectTeamAttendanceScreen,
        navigationOptions: {
          header: null
        }
    },
    BookingCalendarHolidays: {
      screen: BookingCalendarHolidaysScreen,
      navigationOptions: {
        header:null
      }
    },
    SelectPitchTimetable: {
      screen: SelectPitchTimetableScreen,
      navigationOptions: {
        header: null
      }
    },
    BookingCalendarTimetable: {
      screen: BookingCalendarTimetableScreen,
      navigationOptions: {
        header: null
      }
    },
    SelectTime: {
      screen: SelectTimeScreen,
      navigationOptions: {
        header: null
      }
    },
    ViewTime: {
      screen: ViewTimeScreen,
      navigationOptions: {
        header: null
      }
    },
    SelectTeam:{
      screen:SelectTeamScreen,
      navigationOptions: {
        header: null
      }
    },
    SelectTeamHolidays:{
      screen:SelectTeamHolidaysScreen,
      navigationOptions: {
        header: null
      }
    },
    
    BookingCalendarAttendance:{
      screen: BookingCalendarAttendanceScreen,
      navigationOptions: {
        header: null
      }
    },
    SelectBooking: {
      screen: SelectBookingScreen,
      navigationOptions:{
        header: null
      }
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
