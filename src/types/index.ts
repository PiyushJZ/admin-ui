export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type UserState = {
  users: User[];
  deleteUser: (user: User) => void;
  deleteMultipleUsers: (selectedUsers: User[]) => void;
  fetchUsers: () => void;
};

export type PageState = {
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  setPage: (pageNumber: number) => void;
};

export type SearchState = {
  searchTerm: string;
  updateSearch: (term: string) => void;
};
