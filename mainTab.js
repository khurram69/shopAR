import React, {useState} from 'react';
import {View} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';

const MainTab = createMaterialBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
      </Tab.Navigator>
    );
  }
  export default MyTabs;