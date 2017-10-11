import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>GoFind</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#5f6360',
    // backgroundColor: 'rgb(255, 114, 115)',
    marginTop: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  }
})
