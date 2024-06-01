import React from 'react';
import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function Index() {
  return (
    <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',height:height*0.11,position: 'absolute',bottom:0,width:'100%',backgroundColor:'white'}}>
        <View style={{backgroundColor:'#e68921',flexDirection:'row',alignItems:'center',height:height*0.06,justifyContent:'center',width:'88%',marginHorizontal:'6%',borderRadius:10}}>
            <Text style={{fontSize:14,fontWeight:'bold',color:'white'}}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  );
}



export default Index;
