import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import HomeStackNavigator from "./HomeStackNavigator";
import TrendingStackNavigator from "./TrendingStackNavigator";
import InboxStackNavigator from "./InboxStackNavigator";
import LibraryStackNavigator from './LibraryStackNavigator';
import SubscriptionStackNavigator from './SubscriptionsStackNavigator';

export default createBottomTabNavigator({
  HomeStackNavigator,
  TrendingStackNavigator,
  SubscriptionStackNavigator,
  InboxStackNavigator,
  LibraryStackNavigator
});
