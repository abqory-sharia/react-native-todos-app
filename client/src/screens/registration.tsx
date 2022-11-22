import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

export default function Registration() {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');
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
        {/* <Button title="Login" color="#243B55" onPress={handleLogin} /> */}
      </View>
    </View>
  );
}
