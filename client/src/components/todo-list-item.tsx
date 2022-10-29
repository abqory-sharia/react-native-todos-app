import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TodoItem, {TodoItemsDataProps} from './todo-item';

interface TodoListItemsProps {
  onToggleCheck: () => void;
  onRemove: () => void;
  data: Array<TodoItemsDataProps>;
}

export default function TodoListItem({
  onToggleCheck,
  onRemove,
  data,
}: TodoListItemsProps) {
  return (
    <View>
      {data.map((item, i) => (
        <TodoItem
          key={item.id}
          onRemove={onRemove}
          onToggleCheck={onToggleCheck}
          job={item.job}
          idx={i + 1}
          item={item}
          done={item.done}
        />
      ))}
    </View>
  );
}
