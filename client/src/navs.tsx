import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/main';
import useStore from './store/store';
import LoginScreen from './screens/login';
import Archived from './screens/archieved';
import BottomTab from './navigation/bottomTab';
import Registration from './screens/registration';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
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
      {isLogin && token ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Tab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            options={{headerShown: false}}
            component={Registration}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
