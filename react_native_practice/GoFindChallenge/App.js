import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <SearchBar></SearchBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#ff7273'
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});
