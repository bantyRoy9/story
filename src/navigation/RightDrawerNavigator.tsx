import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RightDrawerParamList } from '../types/navigation';
import LeftDrawerNavigator from './LeftDrawerNavigator';
import RightDrawerContent from '../components/RightDrawerContent';

const RightDrawer = createDrawerNavigator<RightDrawerParamList>();

function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerNavigator} />
    </RightDrawer.Navigator>
  );
}

export default RightDrawerScreen;
