import React, {useCallback} from 'react';
import TodoListItem from '../components/todo-list-item';
import {Text, View, FlatList} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import TodoInput from '../components/todo-input';
import {
  GET_TODOS_ARCHIEVED,
  GET_TODOS_PER_USER,
  REMOVE_TODO,
  TOGGLE_DONE,
} from '../queries/todos';
import {TodoItem, todosParser} from '../utils/todo';
import useStore from '../store/store';
import {useFocusEffect} from '@react-navigation/native';

export default function MainScreen() {
  const {users} = useStore();
  const {data, loading, error, refetch} = useQuery(GET_TODOS_PER_USER, {
    variables: {userId: users.userId},
  });
  const [deleteTodo] = useMutation(REMOVE_TODO, {
    refetchQueries: [{query: GET_TODOS_PER_USER}],
  });

  const [updateTodo, {error: errToggle}] = useMutation(TOGGLE_DONE, {
    refetchQueries: [{query: GET_TODOS_ARCHIEVED}],
  });

  const todos: TodoItem[] = data?.todos?.data
    ? todosParser(data?.todos?.data)
    : [];

  if (error) {
    console.error(JSON.stringify(error, null, 2));
    console.info(users);
  }

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const handleDelete = useCallback((todoId: number) => {
    deleteTodo({
      variables: {
        id: todoId,
      },
    });
  }, []);

  const onToggleCheck = useCallback((todoId: number) => {
    updateTodo({
      variables: {
        id: todoId,
        data: {
          status: true,
          users_permissions_user: users.userId,
        },
      },
    });
    if (errToggle) {
      console.warn(JSON.stringify(errToggle, null, 2));
    }
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
          Rumah Penguin Todos App ???
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
            onRemove={() => handleDelete(item.id)}
            main="main"
          />
        )}
      />
      <TodoInput />
    </View>
  );
}
