import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../common/TabBarIcon";
import TrendingScreen from "../screens/TrendingScreen";
import COLORS from "../../constants/COLORS";

const TrendingStackNavigator = createStackNavigator({
  Trending: TrendingScreen
});

TrendingStackNavigator.navigationOptions = {
  tabBarLabel: "Trending",
  tabBarOptions: {
    activeTintColor: COLORS.tintColor
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-flame${focused ? "" : "-outline"}`
          : "md-flame"
      }
    />
  )
};

export default TrendingStackNavigator;
