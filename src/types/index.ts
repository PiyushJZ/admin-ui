export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AppState = {
  page: number;
  users: User[];
  nextPage: () => void;
  previousPage: () => void;
  setPage: (pageNumber: number) => void;
  deleteUser: (user: User) => void;
  deleteMultipleUsers: (selectedUsers: User[]) => void;
  fetchUsers: () => void;
};
