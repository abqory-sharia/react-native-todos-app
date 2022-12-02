import {Text, View} from 'react-native';
import TodoInput from '../components/todo-input';
import TodoItem from '../components/todo-list-item';

export default function MainScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2EAF3',
      }}>
      <View style={{flex: 1, paddingTop: 35}}>
        <Text
          style={{
            color: '#1D2F44',
            fontSize: 26,
            fontWeight: '600',
            marginBottom: 10,
          }}>
          Rumah Penguin Main Screen
        </Text>
      </View>
      <View style={{flex: 4, marginBottom: 2}}>
        <TodoItem />
      </View>
      <TodoInput />
    </View>
  );
}
