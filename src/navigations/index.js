import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteNav from './RouteNav';
import AccountProvider from '../contexts/AccountProvider';

export default function App() {
  return (
    <AccountProvider>
      <NavigationContainer>
        <RouteNav />
      </NavigationContainer>
    </AccountProvider>
  );
}
