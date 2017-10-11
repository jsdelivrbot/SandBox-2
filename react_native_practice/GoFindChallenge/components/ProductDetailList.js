import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native'
import ProductDetail from './ProductDetail'

export default class ProductDetailList extends Component {
  state = { modalVisible: false }
  toggleModal(visible) {
    this.setState({ modalVisible: visible })
  }

  renderItems(data) {
    if (data.length > 0) {
      return (
        <View>
          {data.map((item, i) => {
            return <ProductDetail key={i} item={item} />
          })}
        </View>
      )
    } else {
      return null
    }
  }

  render() {
    const data = this.props.data

    return (
      <ScrollView style={styles.dataContainer}>
        {this.renderItems(data)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  dataContainer: {
    width: '100%',
    padding: 10
  },
  descriptionContainer: {
    marginBottom: 50
  },
  description: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5
    // marginLeft: 20
  },
  modal: {
    height: '100%',
    backgroundColor: '#ff7273',
    marginTop: 22,
    padding: 20
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginTop: 10
  }
})
