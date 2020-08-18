import React, { Component } from 'react';
import { View, Text } from 'react-native'

class SharePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View>
        <Text>On SharePlaceScreen</Text>
      </View>
    );
  }
}

SharePlace.options = {
  topBar: {
    title: {
      text: 'Share Place',
    }
  }
}
 
export default SharePlace;