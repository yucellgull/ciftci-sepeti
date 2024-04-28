import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import { Image,Text } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen"

const Stack = createStackNavigator();

function HomeNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: {backgroundColor:'#FCC656'},
                    headerTitle: () => (
                        <Image
                        
                        source={require("../../assets/cifliktensepete.png")}
                        style={{width:250,height:29.5,marginLeft:'18%'}}

                        />
                    )
                }}
            />
            <Stack.Screen 
                
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{

                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerStyle: {backgroundColor:'#FCC656'},
                    headerTitle: () => (
                       <Text style={{fontWeight:'bold',fontSize:16,color:'white',marginLeft:'50%'}}>
                        Ürünler
                        </Text>

                        
                    )
                }}
            />
            

        </Stack.Navigator>
    )
} 

export default HomeNavigator