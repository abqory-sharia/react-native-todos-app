import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';

type Store = {
  auth: {
    users: any;
    token: string;
    isLogin: boolean;
    loginApp: (userId: string, jwt: string) => void;
    logout: () => void;
  };
};

const useStore = create(
  persist<Store>(
    (set, get) => ({
      auth: {
        users: {},
        token: '',
        isLogin: false,
        loginApp: (userId: string, jwt: string) => {
          set({
            auth: {...get().auth, users: {userId}, token: jwt, isLogin: true},
          });
        },
        logout: () => {
          set({auth: {...get().auth, users: {}, token: '', isLogin: false}});
        },
      },
    }),
    {
      name: 'login-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useStore;
