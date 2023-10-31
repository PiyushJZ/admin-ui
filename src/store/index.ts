import axios from 'axios';
import { create } from 'zustand';

import { PageState, SearchState, User, UserState } from '../types';

export const useUserStore = create<UserState>(set => ({
  users: [],

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

export const usePageStore = create<PageState>(set => ({
  page: 1,

  nextPage: () => set(state => ({ page: state.page + 1 })),
  previousPage: () => set(state => ({ page: state.page - 1 })),
  setPage: (pageNumber: number) => set(() => ({ page: pageNumber })),
}));

export const useSearchStore = create<SearchState>(set => ({
  searchTerm: '',

  updateSearch: (term: string) => set(() => ({ searchTerm: term })),
}));
