import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type Store = {
  users: any;
  token: string | null;
  isLogin: boolean;
  registerApp: (userId: string, jwt: string) => void;
  setAuth: (userId: string, jwt: string) => void;
  logout: () => void;
};

const useStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        users: {},
        token: null,
        isLogin: false,
        registerApp: (userId: string, jwt: string) => {
          set({
            users: {userId},
            token: jwt,
            isLogin: true,
          });
        },
        setAuth: (userId: string, jwt: string) => {
          set({
            users: {userId},
            token: jwt,
            isLogin: true,
          });
        },
        logout: () => {
          set({users: {}, token: null, isLogin: false});
        },
      }),
      {
        name: 'login-storage',
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);

export default useStore;
