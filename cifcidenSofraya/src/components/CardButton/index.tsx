import React from 'react';
import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from 'react-native';
import {connect} from "react-redux"
import * as actions from "../../redux/actions/cartActions"
const { width, height } = Dimensions.get('window');
import { Product } from "../../models";

type cartButtonType = {
  item: Product;
  addItemToCart: (a: Product) => void;
}

function index({item,addItemToCart}:cartButtonType) {
  return (
    <TouchableOpacity onPress={() => addItemToCart(item)} style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',height:height*0.11,position: 'absolute',bottom:0,width:'100%',backgroundColor:'white'}}>
        <View style={{backgroundColor:'#e68921',flexDirection:'row',alignItems:'center',height:height*0.06,justifyContent:'center',width:'88%',marginHorizontal:'6%',borderRadius:10}}>
            <Text style={{fontSize:14,fontWeight:'bold',color:'white'}}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps=(dispatch) => {
  return {
    addItemToCart: (product:Product) => 
      dispatch(actions.addToCart({quantity:1,product}))
  }
}

export default connect(null,mapDispatchToProps)(index)
