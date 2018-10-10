import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../common/Header";

class LibraryScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Library Screen</Text>
      </View>
    );
  }
}

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fff"
  }
});

