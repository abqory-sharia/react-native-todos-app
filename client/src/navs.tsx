import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/main';
import useStore from './store/store';
import LoginScreen from './screens/login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {isLogin, token} = useStore(state => state.auth);

  return (
    <Stack.Navigator>
      {isLogin && token ? (
        <Stack.Screen
          name="Main"
          options={{headerShown: false}}
          component={MainScreen}
        />
      ) : (
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
      )}
    </Stack.Navigator>
  );
}
