import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../common/Header";

class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  render() {
    return (
      <View StyleSheet>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

export default SettingsScreen;

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

