import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/gofindlogo.png')}
        />
        <Text style={styles.headerText}>GoFind</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 50
  }
});
