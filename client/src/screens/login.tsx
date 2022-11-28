import {useMutation} from '@apollo/client';
import React, {useCallback, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import useStore from '../store/store';
import {LOGIN} from '../queries/users';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navs';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: Props) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const {setAuth, token} = useStore();
  const [login, {error}] = useMutation(LOGIN);

  const handleLogin = useCallback(() => {
    login({variables: {input: {identifier, password}}})
      .then(data => {
        if (!data) return;
        const userId = data.data?.login?.user.id;
        const jwt = data.data?.login?.jwt;
        setAuth(userId, jwt);
      })
      .catch(err => console.info(err));
  }, []);

  if (error) {
    console.info(JSON.stringify(error, null, 2));
    console.info(token, 'token');
    // return <Text>{error}</Text>;
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
      <View style={{width: '80%'}}>
        <Text
          style={{color: 'blue', textAlign: 'right'}}
          onPress={() => navigation.navigate('Register')}>
          Register
        </Text>
      </View>
    </View>
  );
}
