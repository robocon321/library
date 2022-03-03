import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/Category/index';
import NewsDetailScreen from '../screens/NewsDetail/index';
import HomeTabNav from './HomeTabNav';
import LoginScreen from '../screens/Login';

const RouteStack = createStackNavigator();

const RouteNav = ()  => {
  return (
      <RouteStack.Navigator   
        screenOptions={{
          headerShown: false
        }}
      >
        <RouteStack.Group>
          <RouteStack.Screen name="HomeTabNav" component={HomeTabNav} />
        </RouteStack.Group>
        <RouteStack.Group>
          <RouteStack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
        </RouteStack.Group>
        <RouteStack.Group>
          <RouteStack.Screen name="LoginScreen" component={LoginScreen} />
        </RouteStack.Group>
        <RouteStack.Group screenOptions={{ presentation: 'modal' }}>
          <RouteStack.Screen name="CategoryScreen" component={CategoryScreen} />
        </RouteStack.Group>
      </RouteStack.Navigator>
  );
}

export default RouteNav;
