import React, {useCallback} from 'react';
import TodoListItem from '../components/todo-list-item';
import {Text, View, FlatList} from 'react-native';
import {gql, useMutation} from '@apollo/client';
import TodoInput from '../components/todo-input';
import {useQuery} from '@apollo/client';
import {GET_TODOS} from '../queries/todos';

const initialData = [
  {
    id: 99,
    job: 'Create Agency Website',
    done: false,
  },
  {
    id: 100,
    job: 'Doing React Native',
    done: false,
  },
  {
    id: 101,
    job: 'Doing PPT Design',
    done: true,
  },
  {
    id: 102,
    job: 'Doing Graphic Design',
    done: false,
  },
];

interface TodoItem {
  id: number;
  job: string;
  done: boolean;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

const todosParser = (todos: any) => {
  return todos.map((todo: TodoItem) => ({id: todo.id, ...todo.attributes}));
};

export default function MainScreen() {
  const {data, loading, error} = useQuery(GET_TODOS);
  const todos: TodoItem[] = data?.todos?.data
    ? todosParser(data?.todos?.data)
    : [];

  // const handleDelete = useCallback((item: Item) => {
  //   console.info(item);
  //   setTodos(prevTodo => {
  //     const newTodo = prevTodo.filter(td => td !== item);
  //     return newTodo;
  //   });
  // }, []);

  // const toggleCheck = useCallback((item: Item) => {
  //   console.info(item);
  //   setTodos(prevTodo => {
  //     const newTodo = [...prevTodo];
  //     const index = prevTodo.indexOf(item);
  //     newTodo[index] = {
  //       ...item,
  //       done: !item.done,
  //     };
  //     return newTodo;
  //   });
  // }, []);

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
      {/* <ScrollView>
        <TodoListItem
          data={todos}
          // onRemove={handleDelete}
          // onToggleCheck={toggleCheck}
        />
      </ScrollView> */}

      <FlatList
        data={todos}
        renderItem={({item, index}) => (
          <TodoListItem idx={index + 1} job={item.job} done={item.done} />
        )}
      />
      <TodoInput />
    </View>
  );
}
