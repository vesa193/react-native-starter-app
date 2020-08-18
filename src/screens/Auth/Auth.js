import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { startTabs } from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  loginHandler = () => {
    startTabs()
  }

  render() { 
    return ( 
      <View style={styles.authContainer}>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
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
