import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList, Image} from 'react-native';

export default function Kids({navigation}){

    const [product, setProduct] = useState([
        {image: require('../../assets/Products/kids/blackjt.jpg'), name:'Black Jacket Trouser', price:'1299', key:'1'},
        {image:require('../../assets/Products/kids/Camojt.jpg'), name:'Camoflauge Jacket trouser', price:'999', key:'2'},
        {image:require('../../assets/Products/kids/htp.jpg'), name:'Hypster Tee Pants', price:'1399', key:'3'},
        {image:require('../../assets/Products/kids/Jtrouser.jpg'), name:'Jacket Trouser', price:'899', key:'4'},
        {image:require('../../assets/Products/kids/Tshort.jpg'), name:'Tee Short', price:'1200', key:'5'},
        {image:require('../../assets/Products/kids/hjp.jpg'), name:'Hypster Jacket Pants', price:'1299', key:'6'},
      ])

    return(
        <SafeAreaView style={styles.container}>

        <FlatList 
          numColumns={2}
          data={product}
          renderItem={({ item }) => (

        <View style={{backgroundColor:'white', alignContent:'center', marginHorizontal:3, marginVertical:3}}>
          <View style={styles.productImage}>
               
            <Image source={item.image} style={styles.image} resizeMode='cover' />
          </View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.price}>Rs. <Text style={{fontWeight:'bold'}}>{item.price}</Text></Text>

        </View>
          )}
        />

        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f1f1f1',
    },
    image:{
        flex: 1,
        width: undefined,
        height: undefined
      },
      productImage:{
        width:200,
        height:200,
      },
      nameText:{
        fontFamily:'ubunturegular',
        color:'#535353',
        fontSize: 20,
        textAlign:'left'
      },
      price:{
        fontFamily:'ubunturegular',
        color:'#00acec',
        fontSize: 25,
      }
  })