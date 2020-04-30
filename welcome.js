import React, {useState} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground } from 'react-native';


export default function Welcome(){
    return(
        <View style={styles.container}>

        <View style={{flex:2}}>
          <ImageBackground source={require('../images/mainHeader.jpg')} style={{width: '100%', height: '100%'}}>
          </ImageBackground>
        </View>

        <View style={styles.infoContainer}>

          <Text style={{fontSize:30, paddingTop:10, textAlign:'center' }}>Welcome to <Text style={{fontWeight:'bold'}}>Shop AR</Text></Text>
          <Text style={{fontSize:16, color:'grey', paddingTop:40,padding:14, textAlign:'center'}}>
            Shop AR brings you the plateform where you can try cloths online before buying them. it ease you in buying stuff online without hesitatiom.
          </Text>
              

        </View>
        
        <Button title="Get Started ->" />

      </View>
    );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:25 ,
    backgroundColor: 'white',
    justifyContent:'center'
  },
})