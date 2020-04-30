import React from 'react';
import {View} from 'react-native';
import NavigationContainer from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./home";
import MenScreen from "./men";
import WomenScreen from './women'
import KidsScreen from './kids'
import ProductDetailScreen from './productDetail'

const homeStack = createStackNavigator();

export default function HomeStack(){
    return(
            <homeStack.Navigator>
                <homeStack.Screen name="Home" component={HomeScreen} />
                <homeStack.Screen name="Men" component={MenScreen} />
                <homeStack.Screen name="Women" component={WomenScreen} />
                <homeStack.Screen name="Kids" component={KidsScreen} />
                <homeStack.Screen name="Details" component={ProductDetailScreen} />
            </homeStack.Navigator>
    )
}