import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './navigation/bottom-tab';
export interface RootParamsList {
  Login?: undefined;
  Register?: undefined;
  'Bottom Tab'?: undefined;
  Arhcieved?: undefined;
  Main?: undefined;
  Profile?: undefined;
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Tab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
