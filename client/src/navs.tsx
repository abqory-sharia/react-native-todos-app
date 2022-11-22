import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/main';
import useStore from './store/store';
import LoginScreen from './screens/login';
import Archived from './screens/archieved';
import BottomTab from './navigation/bottomTab';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {isLogin, token} = useStore(state => state.auth);

  return (
    <NavigationContainer>
      {isLogin && token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Tab"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            options={{headerShown: false}}
            component={MainScreen}
          />
          <Stack.Screen
            name="Archieved"
            options={{headerShown: false}}
            component={Archived}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
