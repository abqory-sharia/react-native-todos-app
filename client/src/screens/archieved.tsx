import {useMutation, useQuery} from '@apollo/client';
import React, {useCallback} from 'react';
import {Text, View, FlatList} from 'react-native';
import {GET_TODOS_ARCHIEVED, TOGGLE_DONE} from '../queries/todos';
import TodoListItem from '../components/todo-list-item';

interface TodoItem {
  id: number;
  job: string;
  done: boolean;
  description?: string;
  createdAt: string;
  updatedAt: string;
  attributes: {};
}

const todosParser = (todos: any) => {
  return todos.map((todo: TodoItem) => ({id: todo.id, ...todo.attributes}));
};

export default function Archived() {
  const {data, error} = useQuery(GET_TODOS_ARCHIEVED);
  const [updateTodo] = useMutation(TOGGLE_DONE, {
    refetchQueries: [{query: GET_TODOS_ARCHIEVED}],
  });
  const todos: TodoItem[] = data?.todos?.data
    ? todosParser(data?.todos?.data)
    : [];

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
