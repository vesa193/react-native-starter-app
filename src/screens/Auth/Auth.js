import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View style={styles.authContainer}>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});


AuthScreen.options = {
  topBar: {
    title: {
      text: 'Login',
      color: 'black'
    },
    background: {
      color: '#ccc'
    }
  }
}
 
export default AuthScreen;
