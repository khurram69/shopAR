import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home() {
  return (
      //Whole Flex
      <View style={{flex:1,paddingTop:25, backgroundColor:"lightgrey"}}>
        
        <View style={{padding:2, flex:1}}>
          <ImageBackground source={require('../images/mainHeader.jpg')} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </View>

        <View style={{flexDirection:"row", flex:1}}>

          <View style={{flex:1,padding:2}}>
          <ImageBackground source={require('../images/Kids.jpg')} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
          </View>

          <View style={{flex:1}}>

            <View style={{flex:1,padding:2}}>
              <ImageBackground source={require('../images/Men.jpg')} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            </View>

            <View style={{flex:1,padding:2}}>
              <ImageBackground source={require('../images/Women.jpg')} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            </View>

          </View>

        </View>

      </View>
  );
}