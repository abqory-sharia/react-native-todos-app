import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MainScreen from '../screen/main';
import Arhcieved from '../screen/archieved';
import Profile from '../screen/profile';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: () => <Feather name="home" color="#243B55" size={18} />,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Archieved"
        component={Arhcieved}
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
