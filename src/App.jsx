import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./src/Home/Home"
import Dry from "./src/Dry/Dry"
import Settings from "./src/Settings/Setting"

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        activeColor="tomato" 
        inactiveColor='white'
        labelStyle={{ fontSize: 20 }}
        barStyle={{ backgroundColor: '#202020'}}
        style={{ borderColor: 'green' }}
        shifting={false}
        >
        <Tab.Screen name="Weather" component={Home} 
          options={{
            tabBarLabel: 'Weather',
            tabBarColor:'#202020',
            tabBarBadge:"",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="weather-cloudy" color={color} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Drying" component={Dry}      
            options={{
            tabBarLabel: 'Drying',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tshirt-v" color={color} size={26} />
            ),
        }}/>
        <Tab.Screen name="Settings" component={Settings}      
            options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
