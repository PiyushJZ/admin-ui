import { PageNavigation, Table } from './components';

const App = () => {
  return (
    <>
      <div className='text-3xl capitalize text-center p-4'>admin dashboard</div>
      <Table />
      <PageNavigation />
    </>
  );
};

export default App;
