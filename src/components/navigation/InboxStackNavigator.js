import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../common/TabBarIcon";
import InboxScreen from "../screens/InboxScreen";
import COLORS from "../../constants/COLORS";

const InboxStackNavigator = createStackNavigator({
  Inbox: InboxScreen
});

InboxStackNavigator.navigationOptions = {
  tabBarLabel: "Inbox",
  tabBarOptions: {
    activeTintColor: COLORS.tintColor
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-mail${focused ? "" : "-outline"}`
          : "md-mail"
      }
    />
  )
};

export default InboxStackNavigator;
