import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Image, Text,TouchableOpacity } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { Entypo, Ionicons, Foundation,MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, getFocusedRouteNameFromRoute} from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack({navigation,route}) {
  
  const tabHiddenRoutes = ["ProductDetails"]

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
    </Stack.Navigator>
  );
}

export default function HomeNavigator({navigation,route}){
  return <MyStack navigation ={navigation} route ={route} />


}
