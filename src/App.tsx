import { useEffect } from 'react';

import { PageNavigation, Table } from './components';
import { useStore } from './store';

const App = () => {
  const users = useStore(state => state.users);

  useEffect(() => {
    useStore.getState().fetchUsers();
  }, []);

  return (
    <>
      <div className='text-3xl capitalize text-center p-4'>admin dashboard</div>
      <Table users={users} />
      {users.length > 0 && (
        <PageNavigation pages={Math.ceil(users.length / 10)} />
      )}
    </>
  );
};

export default App;
