import {useMutation} from '@apollo/client';
import React, {useCallback, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import useStore from '../store/store';
import {LOGIN} from '../queries/users';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const {loginApp} = useStore();
  const [login, {error}] = useMutation(LOGIN);

  console.log(loginApp);

  const handleLogin = () => {
    login({variables: {input: {identifier, password}}})
      .then(data => {
        if (!data) return;
        const userId = data.data?.login?.user.id;
        const jwt = data.data?.login?.jwt;

        loginApp(userId, jwt);
      })
      .catch(err => console.info(err));
  };

  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <Text>User Belum terdaftart</Text>;
  }

  // todos@mail.com
  // todo112345;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '80%',
          flexDirection: 'column',
        }}>
        <Text>Email</Text>
        <TextInput
          onChangeText={text => setIdentifier(text)}
          style={{
            backgroundColor: '#E2EAF3',
            width: '100%',
            fontSize: 18,
            height: 50,
            borderRadius: 10,
          }}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={{
            backgroundColor: '#E2EAF3',
            width: '100%',
            fontSize: 18,
            height: 50,
            borderRadius: 10,
            marginVertical: 8,
          }}
        />
        <Button title="Login" color="#243B55" onPress={handleLogin} />
      </View>
      {/* <Text onPress={}>Register</Text> */}
    </View>
  );
}
