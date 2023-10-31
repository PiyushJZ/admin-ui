import { useEffect } from 'react';

import { PageNavigation, Search, Table } from './components';
import { useUserStore } from './store';

const App = () => {
  const users = useUserStore(state => state.users);

  useEffect(() => {
    useUserStore.getState().fetchUsers();
  }, []);

  return (
    <>
      <div className='text-2xl capitalize text-center pt-4'>
        admin dashboard
      </div>
      <Search />
      <Table users={users} />
      {users.length > 0 && (
        <PageNavigation pages={Math.ceil(users.length / 10)} />
      )}
    </>
  );
};

export default App;
