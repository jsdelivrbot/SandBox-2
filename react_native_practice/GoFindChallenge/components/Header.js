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
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold'
  },
  logo: {
    height: 60,
    width: 60,
    margin: 10,
  }
});
