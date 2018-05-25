import React, { Component } from 'react';
import { ActivityIndicator, View, Text} from 'react-native';

class Loader extends Component {
    render() {
      return (
        <View style={{ alignItems : 'center', flexGrow : 1, justifyContent : 'center' } } >
        <ActivityIndicator animating={true} size="large" color="#fff" />
        <Text style={{color: '#fff', fontSize: 20}}>Loading</Text>
     </View> 
      );
    }
  }

  export default Loader;