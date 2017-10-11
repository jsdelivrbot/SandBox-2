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

export default class ProductDetail extends Component {
  state = { modalVisible: false }

  toggleModal(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    const item = this.props.item
    
    return (
      <View>
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
              <Text style={styles.itemTitle}>{item.itemName}</Text>
              <Text style={styles.description}>{item.brand}</Text>
              <Text style={styles.description}>{item.brand}</Text>
              <Text style={styles.description}>{item.brand}</Text>
              <Text style={styles.description}>{item.brand}</Text>
              <TouchableHighlight
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible)
                }}
              >
                <Text>Back</Text>
              </TouchableHighlight>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.toggleModal(true)
            }}
          >
            <Text>View Details</Text>
          </TouchableHighlight>
        </View>
      </View>
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
