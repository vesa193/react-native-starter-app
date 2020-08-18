import React, { Component } from 'react';
import { View, Text } from 'react-native'

class FindPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View>
        <Text>On FindPlaceScreen</Text>
      </View>
    );
  }
}

FindPlace.options = {
  topBar: {
    title: {
      text: 'Find Place',
    }
  }
}
 
export default FindPlace;