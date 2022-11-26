import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useStore from './store/store';
import LoginScreen from './screens/login';
import BottomTab from './navigation/bottomTab';

export type RootStackParamList = {
  Login: undefined;
  'Bottom Tab': undefined;
  Archived: undefined;
  Beranda: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const {isLogin, token} = useStore();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin && token ? (
          <Stack.Screen
            name="Bottom Tab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
