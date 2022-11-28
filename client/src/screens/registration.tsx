import React, {useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, TextInput, Button} from 'react-native';
import {RootStackParamList} from '../navs';
import {useMutation} from '@apollo/client';
import {REGISTRATION} from '../queries/users';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function Registration({navigation}: Props) {
  const [register, {data, error}] = useMutation(REGISTRATION);
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');

  if (error) {
    console.info(JSON.stringify(error, null, 2));
  }
  const handleRegistration = useCallback(() => {
    register({variables: {username, email, password}});
    console.info(JSON.stringify(data, null, 2));
  }, [username, password, email]);
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
        <Text>Username</Text>
        <TextInput
          // onChangeText={text => setIdentifier(text)}
          style={{
            backgroundColor: '#E2EAF3',
            width: '100%',
            fontSize: 18,
            height: 50,
            borderRadius: 10,
          }}
        />
        <Text>Email</Text>
        <TextInput
          // onChangeText={text => setIdentifier(text)}
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
          // onChangeText={text => setPassword(text)}
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
        <Button title="Login" color="#243B55" onPress={handleRegistration} />
      </View>
      <View style={{width: '80%'}}>
        <Text
          style={{color: 'blue', textAlign: 'right'}}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </View>
  );
}
