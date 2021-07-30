import React from 'react';
import { createDrawerNavigator,drawerContent } from '@react-navigation/drawer';
import {enableScreens} from 'react-native-screens'


enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './Screens/MainTabScreen';
import DrawerContent from './Screens/DrawerContent';
import Tabs from './Screens/Tabs';
const Drawer=createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer> 
      {/* <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="WelcomeScreen" component={MainTabScreen} />
      </Drawer.Navigator> */}
      <Tabs/>
    </NavigationContainer>
  );
}

