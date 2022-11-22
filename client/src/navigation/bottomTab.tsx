import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MainScreen from '../screens/main';
import Archived from '../screens/archieved';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={MainScreen}
        options={{
          tabBarIcon: () => <Feather name="home" color="#243B55" size={18} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Archieved"
        component={Archived}
        options={{
          tabBarIcon: () => (
            <Feather name="check-square" color="#243B55" size={18} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Feather name="user" color="#243B55" size={18} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
