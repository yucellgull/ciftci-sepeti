import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import { Image } from "react-native";

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

        </Stack.Navigator>
    )
} 

export default HomeNavigator