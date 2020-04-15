import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from "react-native";


export default function Profile(){
    return (
        //Whole Flex
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignSelf:'center'}}>
              
              <View style={styles.profileImage}>
                <Image source={require('../images/k.jpg')} style={styles.image} resizeMode='center'>
                </Image>
              </View>

            </View>

            <View style={styles.infoContainer}>

              <Text style={styles.text, {fontSize:20}}>Khurram Mushtaq</Text>
              <Text style={styles.text}>khurrammushtaq@gmail.com</Text>

            </View>

            <View style={styles.statsContainer}>

              <View style={styles.statsBox}>
                <Text style={styles.text, {fontSize:25, color:"blue"}}>3</Text>
                <Text style={styles.text , styles.subText}>My Orders</Text>
              </View>

              <View style={styles.statsBox}>
                <Text style={styles.text, {fontSize:25, color:"blue"}}>6</Text>
                <Text style={styles.text , styles.subText}>Whishlist</Text>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:50 ,
      paddingBottom:50,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
      fontFamily:'ubuntubold',
      color: 'grey',
    },
    subText:{
      fontSize: 12,
      color: 'black',
      textTransform: 'uppercase',
      fontWeight: '500'
    },
    image:{
      flex: 1,
      width: undefined,
      height: undefined
    },
    profileImage:{
      width:150,
      height:150,
      borderRadius:80,
      overflow:"hidden"
    },
    infoContainer:{
      alignSelf:'center',
      alignItems:'center',
      paddingTop:16,
    },
    statsContainer:{
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 32
    },
    statsBox:{
      alignItems:"center",
      flex:1
    }
  });