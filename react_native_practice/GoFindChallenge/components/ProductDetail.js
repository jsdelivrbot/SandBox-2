import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native'

export default class ProductDetail extends Component {
  state = { modalVisible: false }
  toggleModal(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    const item = this.props.item

    return (
      <View style={{ padding: 20 }}>
        <Image
          source={{ uri: item.image_url_main }}
          style={{ width: '100%', height: 600 }}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {item.itemName} - ${item.price}
          </Text>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}
          >
            <View style={styles.modal}>
              <Image
                source={{ uri: item.image_url_main }}
                style={{ width: 200, height: 300 }}
              />
              <Text style={styles.itemTitle}>
                {item.itemName ? item.itemName : 'Unknown item'}
              </Text>
              <Text style={styles.description}>
                {item.brand ? item.brand : 'No brand found'}
              </Text>
              <Text style={styles.description}>
                {item.description ? item.description : 'No description found'}
              </Text>
              <Text style={styles.price}>
                ${item.price ? item.price : 'No price found'}
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible)
                }}
              >
                <Text style={styles.link}>Back</Text>
              </TouchableHighlight>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.toggleModal(true)
            }}
          >
            <Text style={styles.link}>View Details</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  descriptionContainer: {
    marginBottom: 40
  },
  description: {
    color: '#fff',
    fontSize: 20,
    marginTop: 5
  },
  price: {
    color: '#fff',
    fontSize: 30,
    marginTop: 10
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
  },
  link: {
    color: '#605E5E',
    marginTop: 10
  }
})
