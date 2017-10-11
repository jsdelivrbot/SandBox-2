import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class ProductDetail extends Component {
  renderItems(data) {
    if (data.length > 0) {
      return (
        <View>
          <Text>
            Items
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    const data = this.props.data;

    return (
      <View style={styles.dataContainer}>
        {this.renderItems(data)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
