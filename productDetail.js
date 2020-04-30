import React from 'react';
import {StyleSheet, Image, View, Text, Button, SafeAreaView} from 'react-native'

export default function ProductDetail({navigation}){

    const pic = this.props.navigation.state.params('image');
    return(

        <SafeAreaView style={styles.container}>

        <View style={styles.imageBox}>
          <Image source={pic} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.name}>{navigation.getParam(name)}</Text>
          <Text style={styles.price}>Rs. <Text style={{fontWeight:'bold'}}>{navigation.getParam(price)}</Text></Text>
          <View style={{flexDirection:'row', paddingTop:70, justifyContent:'center'}}>
            <Text style={styles.size}>S</Text>
            <Text style={styles.size}>M</Text>
            <Text style={styles.size}>L</Text>
            <Text style={styles.size}>XL</Text>
          </View>
        </View>
        <Button title="Add to Cart!" />
      </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    container:{
      flex:1,
    },
    imageBox:{
      flex:3,
      backgroundColor:'blue'
    },
    infoBox:{
      flex:2,
    },
    name:{
      textAlign:'center',
      fontFamily:'ubunturegular',
      fontSize:25,
      paddingTop:40,
      color:'#535353'
    },
    price:{
      fontFamily:'ubunturegular',
      color:'#00acec',
      fontSize: 35,
      textAlign:'center',
      paddingTop:10
    },
    size:{
      textAlign:'center',
      borderColor:'lightgrey',
      borderWidth:1,
      width:70,
      height:35,
      borderRadius:30,
      fontSize:25,
      marginHorizontal:12
    }
  })