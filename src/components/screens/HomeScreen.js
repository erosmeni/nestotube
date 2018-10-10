import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../common/Header";
import Item from "../common/Item";

const THUMBNAIL = require("../../../assets/images/dare-devil.jpg");
const THUMBNAIL2 = require("../../../assets/images/yt-thumbnail.jpg");

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Item thumbnail={THUMBNAIL} title="Daredevil: Dive in!" description="ErgestOsmeni - 72k views -8 hours ago" />
          <Item thumbnail={THUMBNAIL2} title="NestoTube The place to be: Dive in!" description="ErgestOsmeni - 2m views -8 hours ago" />
          <Item thumbnail={THUMBNAIL} title="Daredevil: Dive in!" description="ErgestOsmeni - 8m views -8 hours ago" />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
