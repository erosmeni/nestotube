import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import TabBarIcon from "../common/TabBarIcon";
import LibraryScreen from "../screens/LibraryScreen";
import COLORS from "../../constants/COLORS";

const LibraryStackNavigator = createStackNavigator({
  Library: LibraryScreen
});

LibraryStackNavigator.navigationOptions = {
  tabBarLabel: "Library",
  tabBarOptions: {
    activeTintColor: COLORS.tintColor
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-folder${focused ? "" : "-outline"}`
          : "md-folder"
      }
    />
  )
};

export default LibraryStackNavigator;
