import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteNav from './RouteNav'; 

export default function App() {
  return (
    <NavigationContainer>
      <RouteNav />
    </NavigationContainer>
  );
}
