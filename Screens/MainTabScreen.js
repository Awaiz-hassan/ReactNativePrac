import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import LearnReact from './LearnReact';
import { Button } from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import {enableScreens} from 'react-native-screens'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

enableScreens();
const HomeStack=createNativeStackNavigator();
const LearnStack=createNativeStackNavigator();
const ExploreStack=createNativeStackNavigator();
const AddStack=createNativeStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen=()=>{
  return(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="grey"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
        <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:'white',
        
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Updates"
      component={LearnScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor:'dodgerblue',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />

      <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor:'#694fad',

        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='google-play' color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
export default MainTabScreen;
const HomeScreen=({navigation})=>(      
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={
        {
          headerLeft:()=>(
          <MaterialCommunityIcons title='open drawer' name="menu" size={25} backgroundColor='#009387' onPress={()=>navigation.openDrawer()}/>)
        }
      }/>
    </HomeStack.Navigator>);
    
const LearnScreen=({navigation})=>(      
    <LearnStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'dodgerblue'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <LearnStack.Screen name="LearnScreen" component={LearnReact} options={
        {
          headerLeft:()=>(<MaterialCommunityIcons title='open drawer'
          name="menu" size={25} backgroundColor='#009387' onPress={()=>navigation.openDrawer()}
          />)
        }
      }/>
    </LearnStack.Navigator>);



const ExploreStackScreen=({navigation})=>(      
  <ExploreStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#694fad'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <ExploreStack.Screen name="LearnScreen" component={ExploreScreen} options={
      {
        headerLeft:()=>(<MaterialCommunityIcons title='open drawer'
        name="menu" size={25} backgroundColor='#694fad' onPress={()=>navigation.openDrawer()}
        />)
      }
    }/>
  </ExploreStack.Navigator>);

const AddStackScreen=({navigation})=>(      
  <AddStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#2e3d68'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <AddStack.Screen name="LearnScreen" component={ProfileScreen} options={
      {
        headerLeft:()=>(<MaterialCommunityIcons title='open drawer'
        name="menu" size={25} backgroundColor='#fff' onPress={()=>navigation.openDrawer()}
        />)
      }
    }/>
  </AddStack.Navigator>);
    