import {Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function TodoItem() {
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
          <Text style={{color: '#E2EAF3', fontSize: 20}}>1</Text>
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
              // textDecorationLine: finishJob,
            }}>
            Job
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
              // onPress={onToggleCheck}
            >
              <Feather name="check" color="#E2EAF3" size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                // display: screen === 'main' ? 'flex' : 'none',
              }}
              // onPress={onRemove}
            >
              <Feather name="trash-2" color="#E2EAF3" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
