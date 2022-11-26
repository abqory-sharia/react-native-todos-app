import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';

type Store = {
  users: any;
  token: string | null;
  isLogin: boolean;
  loginApp: (userId: string, jwt: string) => void;
  logout: () => void;
};

const useStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        users: {},
        token: null,
        isLogin: false,
        loginApp: (userId: string, jwt: string) => {
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
