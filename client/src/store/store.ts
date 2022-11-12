import create from 'zustand';

type Store = {
  auth: {
    user: any;
    token: string;
    isLogin: boolean;
    login?: (data: any) => Promise<void>;
    logout?: () => void;
  };
};

const useStore = create<Store>((set, get) => ({
  auth: {
    user: {},
    token: '',
    isLogin: false,
    login: async (data: any) => {
      console.log(data);
    },
    logout: () => console.log('log out'),
  },
}));

export default useStore;
