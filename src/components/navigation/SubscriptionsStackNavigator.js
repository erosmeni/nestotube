import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../common/TabBarIcon";
import SubscriptionScreen from "../screens/SubscriptionScreen";
import COLORS from "../../constants/COLORS";

const SubscriptionStackNavigator = createStackNavigator({
  Subscription: SubscriptionScreen
});

SubscriptionStackNavigator.navigationOptions = {
  tabBarLabel: "Subscription",
  tabBarOptions: {
    activeTintColor: COLORS.tintColor
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-list-box${focused ? "" : "-outline"}`
          : "md-list-box"
      }
    />
  )
};

export default SubscriptionStackNavigator;
