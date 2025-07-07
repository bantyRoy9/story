import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { LeftDrawerParamList } from '../types/navigation';
import AboutScreen from '../screens/AboutScreen';
import Header from '../../src/components/Header/Header';

const LeftDrawer = createDrawerNavigator<LeftDrawerParamList>();

function LeftDrawerNavigator() {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: 'left',header:()=><Header image={require('./../assets/images/logo.png')}/> }}
    >
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
      <LeftDrawer.Screen name="About" component={AboutScreen} />
    </LeftDrawer.Navigator>
  );
}
export default LeftDrawerNavigator;
