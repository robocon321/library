import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from '../screens/Category/index';
import NewsDetailScreen from '../screens/NewsDetail/index';
import HomeTabNav from './HomeTabNav';
import LoginScreen from '../screens/Login';
import PlashScreen from '../screens/PlashScreen/index';
import SettingScreen from '../screens/Setting/index';
import PodcastDetailScreen from '../screens/PodcastDetail/index';

const RouteStack = createStackNavigator();

const RouteNav = ()  => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  if(loading) return <PlashScreen />;
  else return (
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
          <RouteStack.Screen name="SettingScreen" component={SettingScreen} />
        </RouteStack.Group>
        <RouteStack.Group>
          <RouteStack.Screen name="LoginScreen" component={LoginScreen} />
        </RouteStack.Group>
        <RouteStack.Group>
          <RouteStack.Screen name="PodcastDetailScreen" component={PodcastDetailScreen} />
        </RouteStack.Group>
        <RouteStack.Group screenOptions={{ presentation: 'modal' }}>
          <RouteStack.Screen name="CategoryScreen" component={CategoryScreen} />
        </RouteStack.Group>
      </RouteStack.Navigator>
  );
}

export default RouteNav;
