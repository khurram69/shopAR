import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Men({navigation}){

    const [product, setProduct] = useState([
        {image: require('../../assets/Products/men/denim-dark.jpg'), name:'denim-dark blue', price:'1299', key:'1'},
        {image:require('../../assets/Products/men/hiphop.jpg'), name:'hip hop', price:'999', key:'2'},
        {image:require('../../assets/Products/men/lightwash.png'), name:'light wash', price:'1399', key:'3'},
        {image:require('../../assets/Products/men/oldnavy.jpg'), name:'old navy', price:'899', key:'4'},
        {image:require('../../assets/Products/men/ripped.jpg'), name:'ripped', price:'1200', key:'5'},
        {image:require('../../assets/Products/men/stoneblue.jpg'), name:'denim-dark blue', price:'1299', key:'6'},
      ])

    return(
        <SafeAreaView style={styles.container}>

        <FlatList 
          numColumns={2}
          data={product}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.push('Details', item)}>
              <View style={{backgroundColor:'white', alignContent:'center', marginHorizontal:3, marginVertical:3}}>
               <View style={styles.productImage}>
               
                 <Image source={item.image} style={styles.image} resizeMode='cover' />
               </View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.price}>Rs. <Text style={{fontWeight:'bold'}}>{item.price}</Text></Text>

              </View>
            </TouchableOpacity>

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