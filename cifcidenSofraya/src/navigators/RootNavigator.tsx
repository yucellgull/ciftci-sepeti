import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Text } from "react-native";
import { Entypo,Feather,FontAwesome ,MaterialCommunityIcons} from '@expo/vector-icons';
import HomeNavigator from "./HomeNavigator"; 
//grid list menu unread align list server

const Tab = createBottomTabNavigator();
function RootNavigation() {

    const CustomTabBarButton = ({ children }) => {
        return (
          
          <TouchableOpacity
            style={{
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 32,
              justifyContent: "center",
              marginTop: -8,
              alignItems: "center",
              backgroundColor: "#f7b400",
              width: 55,
              height: 55,
            }}
          >
            <Entypo name="list" size={32} color="#959595" />
          </TouchableOpacity>
        );
      };
  
    return (
        
        <Tab.Navigator
        initialRouteName="AnaSayfa"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#f7b400",
          tabBarInactiveTintColor: "#959595",
          headerShown: false,
          tabBarStyle: {
            height: 80,
          },
        }}
      >
        <Tab.Screen
            name="Ana Sayfa"
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ color }) => (
                    <Entypo name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
            name="Search"
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="List"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />


        <Tab.Screen
            name="User"
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
            name="Gift"
            component={HomeNavigator}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="gift" size={24} color={color} />
            ),
          }}
        />

        
    
    </Tab.Navigator>    
    )
}

        
  export default RootNavigation