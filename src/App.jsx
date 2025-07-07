import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import RightDrawerNavigator from './navigation/RightDrawerNavigator';
enableScreens(); // Add this at the very top

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RightDrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
