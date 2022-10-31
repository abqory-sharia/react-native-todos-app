import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface TodoListItemsProps {
  onToggleCheck?: () => void;
  onRemove?: () => void;
  idx: number;
  job: string;
  done: boolean;
}

export default function TodoListItem({
  onToggleCheck,
  onRemove,
  idx,
  job,
  done,
}: TodoListItemsProps) {
  const finishJob = done ? 'line-through' : 'none';

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 12,
          alignItems: 'center',
          marginVertical: 8,
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: '#243B55',
            borderRadius: 12,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          <Text style={{color: '#E2EAF3', fontSize: 20}}>{idx}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#243B55',
            borderRadius: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            minHeight: 50,
            width: 300,
          }}>
          <Text
            style={{
              color: '#E2EAF3',
              fontSize: 18,
              alignItems: 'center',
              textDecorationLine: finishJob,
            }}>
            {job}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
              onPress={onToggleCheck}>
              <Feather name="check" color="#E2EAF3" size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
              onPress={onRemove}>
              <Feather name="trash-2" color="#E2EAF3" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
