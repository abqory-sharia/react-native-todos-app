import {useMutation, useQuery} from '@apollo/client';
import React, {useCallback} from 'react';
import {Text, View, FlatList} from 'react-native';
import {
  GET_TODOS_ARCHIEVED,
  GET_TODOS_PER_USER,
  TOGGLE_DONE,
} from '../queries/todos';
import TodoListItem from '../components/todo-list-item';
import useStore from '../store/store';
import {TodoItem, todosParser} from '../utils/todo';
import {useFocusEffect} from '@react-navigation/native';

export default function Archived() {
  const {users} = useStore();
  const {data, error, refetch} = useQuery(GET_TODOS_ARCHIEVED, {
    variables: {userId: users},
  });
  const [updateTodo] = useMutation(TOGGLE_DONE, {
    refetchQueries: [{query: GET_TODOS_PER_USER}],
  });
  const todos: TodoItem[] = data?.todos?.data
    ? todosParser(data?.todos?.data)
    : [];

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const onToggleCheck = useCallback((todoId: number) => {
    updateTodo({
      variables: {
        id: todoId,
        status: false,
      },
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2EAF3',
        paddingVertical: 20,
      }}>
      <View style={{height: 150, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#1D2F44',
            fontSize: 26,
            fontWeight: '600',
            marginBottom: 10,
          }}>
          Rumah Penguin Todos App ⌣
        </Text>
      </View>

      <FlatList
        data={todos}
        renderItem={({item, index}) => (
          <TodoListItem
            idx={index + 1}
            job={item.job}
            done={item.done}
            onToggleCheck={() => onToggleCheck(item.id)}
            // onRemove={() => handleDelete(item.id)}
          />
        )}
      />
    </View>
  );
}
