import React, {useState} from 'react';
import {View} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


import HomeStackScreen from './homeStack';
import ProfileScreen from './profile';
import WelcomeScreen from "./welcome";

const Tab = createMaterialBottomTabNavigator();
const MainTab = createMaterialBottomTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
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
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  export default MyTabs;