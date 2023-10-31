const Search = () => {
  return (
    <div className='mx-32 py-8 px-4 md:px-8'>
      <label
        htmlFor='Search'
        className='sr-only'
      >
        {' '}
        Search{' '}
      </label>

      <input
        type='text'
        id='Search'
        placeholder='Search by name, email or role'
        className='w-full rounded-md border-gray-200 py-2.5 px-4 pe-10 shadow-sm sm:text-sm'
      />
    </div>
  );
};

export default Search;
