import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import { Product } from "../../models";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

function index({cartItems}:{cartItems:{product:Product, quantity:number}[]}){

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyat;
      setTotalPrice(total)
    })
    cartItems.length ? null : setTotalPrice(0)
  }
  useEffect(() => {
    getProductsPrice()

  },[cartItems])



  return (
    <View style={{flex:1}}>
      <ScrollView style={{ flex:1}}>
      <FlatList
        style={{backgroundColor: "#F5F5F5" }}
        data={cartItems}
        renderItem={({ item }) => <CartItem product={item.product} quantity ={item.quantity} />}
      /><Text style={{padding:13,fontWeight:'bold',color:'#FCC656'}}>Önerilen Ürünler</Text>
      <ScrollView horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
        {productsGetir.map((item,index) =>(
          <ProductItem key={index} item={item} />
        ))}
      
      
      </ScrollView>
    

    </ScrollView>

    <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          paddingHorizontal: "4%",
          width: "100%",
          backgroundColor: "#f8f8f8",
          position:'absolute',
          bottom:0
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#FCC656",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop:-10
            
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop:-10,
            borderTopRightRadius:8,
            borderBottomRightRadius:8

          }}
        >
          <Text
            style={{
              color: "#FCC656",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>

  );
}
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems
  }
}

export default connect(mapStateToProps,null)(index)