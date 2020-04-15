import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from './src/screens/mainTab';



const getFonts = () => Font.loadAsync({
  'ubuntubold': require("./assets/fonts/Ubuntu-B.ttf"),
  'ubunturegular': require("./assets/fonts/Ubuntu-R.ttf"),
  'ubuntumedium': require("./assets/fonts/Ubuntu-M.ttf")
});


const Drawer = createDrawerNavigator();

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false)
if(fontsLoaded){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name='Home' component={MainTabScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish = {()=> setFontsLoaded(true)}
        />
    );
  }
}

