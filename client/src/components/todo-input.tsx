import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ADD_TODOS, GET_TODOS_PER_USER} from '../queries/todos';
import useStore from '../store/store';

export default function TodoInput() {
  const {users} = useStore();
  const [input, setInput] = useState('');
  const [createTodo, {error: errCreate}] = useMutation(ADD_TODOS, {
    refetchQueries: [{query: GET_TODOS_PER_USER}],
  });

  const handleAddTodo = () => {
    if (!input) {
      return;
    }
    createTodo({
      variables: {
        data: {
          job: input,
          description: '',
          done: false,
          users_permissions_user: users.userId,
        },
      },
    });
  };

  if (errCreate) {
    console.info(JSON.stringify(errCreate, null, 2));
  }

  return (
    <View
      style={{
        borderColor: '#fff',
        backgroundColor: '#243B55',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
      }}>
      <TextInput
        style={{color: '#E2EAF3', fontSize: 18, height: 50, flex: 1}}
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        style={{
          height: 30,
          width: 30,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather name="plus" color="#E2EAF3" size={18} />
      </TouchableOpacity>
    </View>
  );
}
