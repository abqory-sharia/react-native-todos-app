import {useQuery} from '@apollo/client';
import React, {useCallback} from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {GET_USER_PROFILE} from '../queries/users';
import useStore from '../store/store';
import {todosParser} from '../utils/todo';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import defaultImg from '../assets/anonymous.png';
import {RootStackParamList} from '../navs';
interface ProfileItemProps {
  username: string;
  email: string;
  profileImage?: any;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function Profile({navigation}: Props) {
  const {logout} = useStore();
  const {data, error} = useQuery(GET_USER_PROFILE, {variables: {id: 1}});

  const profile = data?.usersPermissionsUsers?.data
    ? todosParser(data?.usersPermissionsUsers?.data)
    : [];

  const handleLogout = () => {
    logout();
  };

  return (
    <View>
      <FlatList
        data={profile}
        renderItem={({item, index}) => (
          <ProfileItem
            key={index}
            username={item.username}
            email={item.email}
          />
        )}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

// '../assets/penguinHouse.png';

function ProfileItem({username, profileImage, email}: ProfileItemProps) {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <View key={username} style={{justifyContent: 'flex-start'}}>
        <Image
          source={profileImage ? {uri: profileImage} : defaultImg}
          style={{width: 150, height: 150}}
        />
        <Text style={{paddingVertical: 10, fontSize: 24}}>{username}</Text>
        <Text style={{fontSize: 24}}>{email}</Text>
      </View>
    </View>
  );
}
