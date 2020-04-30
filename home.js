import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';



export default function Home({navigation}) {
  return (
      //Whole Flex
      <View style={{flex:1, backgroundColor:"lightgrey"}}>
        
        <View style={{padding:2, flex:1}}>
          <ImageBackground source={require('../images/mainHeader.jpg')} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </View>

        <View style={{flexDirection:"row", flex:1}}>

          <View style={{flex:1,padding:2}}>
          <TouchableOpacity onPress={() => navigation.navigate('Kids')}>
              <ImageBackground source={require('../images/Kids.jpg')} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
          </TouchableOpacity>
          </View>

          <View style={{flex:1}}>

            <View style={{flex:1,padding:2}}>
              <TouchableOpacity onPress={() => navigation.navigate('Men')}>
                <ImageBackground source={require('../images/Men.jpg')} style={{width: '100%', height: '100%'}}>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={{flex:1,padding:2}}>
            <TouchableOpacity onPress={() => navigation.navigate('Women')}>
                <ImageBackground source={require('../images/Women.jpg')} style={{width: '100%', height: '100%'}}>
                </ImageBackground>
            </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>
  );
}