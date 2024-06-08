import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Dimensions,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen"
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { Entypo, Ionicons, Foundation,MaterialCommunityIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";
import { connect } from 'react-redux';
import { Product } from "../models";
import * as actions from "../redux/actions/cartActions"
const Stack = createStackNavigator();
const {width,height} = Dimensions.get('window')

function MyStack({navigation,route,cartItems,clearCart}:{cartItems:{product:Product,quantity:number}[],clearCart:() => void  }) {
  
  const tabHiddenRoutes = ["ProductDetails","CartScreen"]

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  const [totalPrice,setTotalPrice] = useState<number>(0)
  
  const getProductsPrice = () => {
    if (cartItems && Array.isArray(cartItems)) {
      let total = 0;
      cartItems.forEach(cartItem => {
        total += cartItem.product.fiyat;
      });
      setTotalPrice(total);
    }
  };
  useEffect(() => {
    getProductsPrice()
  },[cartItems,navigation])
  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#FCC656" },
          headerTitle: () => (
            <Image
              source={require("../../assets/cifliktensepete.png")}
              style={{ width: 250, height: 29.5, marginLeft: "18%" }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#FCC656" },
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                marginLeft: "50%",
              }}
            >
              Ürünler
            </Text>
          ),headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={{ width:width*0.22,height:33,backgroundColor:'white',
              marginRight:width*0.03,borderRadius:9,
              flexDirection:'row',alignItems:'center'}}>

                <Image style={{width:33,height:33,marginLeft:3}} source={require("../../assets/cart.png")}/>
                <View style={{flex:1,height:33,justifyContent:'center',alignItems:'center', backgroundColor:'#F3EFFE',borderTopEndRadius:9,borderBottomRightRadius:9}}>
                <Text style={{color:'FCC656',fontWeight:'bold',fontSize:12}}>
                 <Text> {"\u20BA"}</Text>
                 {totalPrice.toFixed(2)}
                
                </Text>
                

                </View>
              
              
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
       
         options={{
          headerBackTitleVisible:false,
          headerTintColor:'white',
          headerStyle:{backgroundColor:"#FCC656"},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8}} > 
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />

              
            </TouchableOpacity>
          ),

          headerTitle:() => (
            <Text style={{fontWeight:'bold',color:'white',fontSize:16,marginLeft: "45%"}}>
            Ürün Detayı  </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),




         }}

         name="ProductDetails"
         component={ProductDetailsScreen}
      />
      <Stack.Screen 
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#FCC656" },
          headerTitle: () => (
            <Text style={{ marginLeft:'60%',fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 4 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() =>clearCart()} style={{ paddingRight: 10 }}> 
              <Ionicons style={{marginRight:8}} name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
        
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  }
}



function HomeNavigator({ navigation, route,cartItems,clearCart}:{clearCart:() => void}) {
  return <MyStack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart} />;


}
export default connect(mapStateToProps,mapDispatchToProps)(HomeNavigator)