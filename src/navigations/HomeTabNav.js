import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../config/colors';
import MainScreen from '../screens/Main/index';
import MyNews from '../screens/MyNews';
import NotificationScreen from '../screens/Notification';
import {AccountContext} from '../contexts/AccountProvider';
import PodcastsScreen from '../screens/Podcasts/index';

const Tab = createBottomTabNavigator();

export default HomeTabNav = props => {
  const {state} = useContext(AccountContext);
  const {name} = state.data;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Trang nhất') {
            return (
              <Icon
                name='home'
                size={size}
                color={color}
              />
            );
          } else if (route.name === (name ? name : "Tin của bạn")) {
            return (
              <Icon
                name='person-outline'
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Nghe podcasts') {
            return (
              <Icon
                name='headset-outline'
                size={size}
                color={color}
              />
            );
          } else {
            return (
              <Icon
                name='notifications-outline'
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: colors.primary,
      })}
    >
      <Tab.Screen name="Trang nhất" component={MainScreen} options={{headerShown: false}} />
      <Tab.Screen name={name ? name : "Tin của bạn"} component={MyNews} options={{headerShown: false}} />
      <Tab.Screen name="Nghe podcasts" component={PodcastsScreen} options={{headerShown: false}} />
      <Tab.Screen name="Thông báo" component={NotificationScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
