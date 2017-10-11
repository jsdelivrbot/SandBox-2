import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ProductDetail from './ProductDetail'

export default class ProductDetailList extends Component {
  renderItems(data) {
    if (data.length > 0) {
      return (
        <View style={{ marginBottom: 100 }}>
          {data.map((item, i) => {
            return <ProductDetail key={i} item={item} />
          })}
        </View>
      )
    } else {
      return (
        <Text style={{ color: '#605E5E' }}>
          Loading...
        </Text>
      )
    }
  }

  render() {
    const data = this.props.data

    return (
      <ScrollView>
        {this.renderItems(data)}
      </ScrollView>
    )
  }
}