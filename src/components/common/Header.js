import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import TabBarIcon from "./TabBarIcon";

const YOUTUBE_LOGO = require("../../../assets/icon.png");

class Header extends Component {
  render() {
    const { container, logoContainer, logo, logoText, iconsContainer } = styles;
    return (
      <View style={container}>
        <TouchableWithoutFeedback>
          <View style={logoContainer}>
            <Image style={logo} source={YOUTUBE_LOGO} />
            <Text style={logoText}>YouTube</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={iconsContainer}>
          <TouchableWithoutFeedback>
            <TabBarIcon
              name={Platform.OS === "ios" ? `ios-videocam` : "md-videocam"}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <TabBarIcon
              name={Platform.OS === "ios" ? `ios-search` : "md-search"}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={{ padding: "15 15" }}>
            <TabBarIcon
              name={Platform.OS === "ios" ? `ios-person` : "md-person"}
            />
          </TouchableWithoutFeedback>
        </View>
        
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 60
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 5,
    width: 200
  },
  logo: {
    width: 50,
    height: 50
  },
  logoText: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    marginTop: 5,
    marginLeft: -5,
    fontSize: 30,
    fontWeight: "bold"
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    marginRight: 15,
    borderColor: "#ccc"
  }
});
