import { MouseEvent } from 'react';
import { useStore } from '../store';

const PageNavigation = ({ pages }: { pages: number }) => {
  const page = useStore(state => state.page);

  const changePage = (clickEvent: MouseEvent<HTMLLIElement>) => {
    const pageNumber = parseInt(clickEvent.currentTarget.innerHTML);
    useStore.getState().setPage(pageNumber);
  };
  const goToNextPage = () => {
    if (page < pages) useStore.getState().nextPage();
  };
  const goToPrevPage = () => {
    if (page > 1) useStore.getState().previousPage();
  };

  return (
    <ol className='flex justify-center p-8 gap-1 text-xs font-medium'>
      <li
        onClick={goToPrevPage}
        className='inline-flex h-8 w-8 items-center justify-center cursor-pointer rounded border border-gray-100 bg-white text-gray-900'
      >
        <span className='sr-only'>Prev Page</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3 w-3'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </li>

      {Array.from(Array(pages).keys()).map(each => {
        return (
          <li
            key={each}
            onClick={changePage}
            className={`${
              page === each + 1
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-100 bg-white text-gray-900 cursor-pointer'
            } block h-8 w-8 rounded border text-center leading-8`}
          >
            {each + 1}
          </li>
        );
      })}

      <li
        onClick={goToNextPage}
        className='inline-flex h-8 w-8 items-center justify-center cursor-pointer rounded border border-gray-100 bg-white text-gray-900'
      >
        <span className='sr-only'>Next Page</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3 w-3'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </li>
    </ol>
  );
};

export default PageNavigation;
