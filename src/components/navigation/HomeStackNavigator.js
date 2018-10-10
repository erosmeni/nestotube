import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../common/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import COLORS from "../../constants/COLORS";

const HomeStackNavigator = createStackNavigator({
  Home: HomeScreen
});

HomeStackNavigator.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: COLORS.tintColor
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

export default HomeStackNavigator;
