import React, { Component } from "react";
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import TabBarIcon from "./TabBarIcon";

class Item extends Component {
  render() {
    const {
      container,
      thumbnail,
      detailsContainer,
      image,
      title,
      description
    } = styles;

    return (
      <View style={container}>
        <View>
          <Image source={this.props.thumbnail} style={thumbnail} />
        </View>
        <View style={detailsContainer}>
          <TouchableHighlight>
            <Image style={image} source={this.props.thumbnail} />
          </TouchableHighlight>
          <View>
            <Text style={title}>{this.props.title}</Text>
            <Text style={description}>{this.props.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
    flexDirection: "column",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  thumbnail: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    marginTop: 5
  },
  image: {
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 5
  },
  title: {
    fontSize: 18
  },
  description: {
    fontSize: 14,
    color: "#ccc"
  }
});
