import axios from 'axios';
import { create } from 'zustand';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

interface AppState {
  page: number;
  users: User[];
  nextPage: () => void;
  previousPage: () => void;
  setPage: (pageNumber: number) => void;
  deleteUser: (user: User) => void;
  deleteMultipleUsers: (selectedUsers: User[]) => void;
  fetchUsers: () => void;
}

export const useStore = create<AppState>(set => ({
  page: 1,
  users: [] as User[],

  nextPage: () => set(state => ({ page: state.page + 1 })),
  previousPage: () => set(state => ({ page: state.page - 1 })),
  setPage: (pageNumber: number) => set(() => ({ page: pageNumber })),

  deleteUser: (user: User) =>
    set(state => ({ users: state.users.filter(each => each.id !== user.id) })),
  deleteMultipleUsers: (selectedUsers: User[]) =>
    set(state => ({
      users: state.users.filter(
        each => !selectedUsers.some(user => user.id === each.id)
      ),
    })),

  fetchUsers: async () => {
    const response = await axios.get(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    );
    const data: User[] = response.data;
    set(() => ({ users: data }));
  },
}));
