import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../common/TabBarIcon";
import SettingsScreen from "../screens/SettingsScreen";
import COLORS from "../../constants/COLORS";

const SettingsStackNavigator = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStackNavigator.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarOptions: {
    activeTintColor: COLORS.tintColor
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-options${focused ? "" : "-outline"}`
          : "md-options"
      }
    />
  )
};

export default SettingsStackNavigator;
