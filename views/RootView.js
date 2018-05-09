import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';

class RootView extends Component {
    constructor(props) {
    super(props);
    this.myRef = React.createRef();
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.myRef}
      </View>
      );
    }
  }

  export default RootView;