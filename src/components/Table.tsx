import { useEffect, useState } from 'react';

import { useStore } from '../store';
import { User } from '../types';

const Table = ({ users }: { users: User[] }) => {
  const [areAllChecked, setAllChecked] = useState(false);
  const [checkboxItems, setCheckboxItem] = useState({});
  const page = useStore(state => state.page);

  // set or unset all checkbox items
  const handleCheckboxItems = () => {
    setAllChecked(!areAllChecked);
    users.forEach((item, idx) => {
      checkboxItems[`checkbox${idx}`] = !areAllChecked;
      setCheckboxItem({ ...checkboxItems });
    });
  };

  // Update checked value
  const handleCheckboxChange = (e, idx) => {
    setAllChecked(false);
    setCheckboxItem({ ...checkboxItems, [`checkbox${idx}`]: e.target.checked });
  };

  useEffect(() => {
    // Set properties with false value
    users.forEach((item, idx) => {
      checkboxItems[`checkbox${idx}`] = false;
      setCheckboxItem({ ...checkboxItems });
    });
  }, []);

  useEffect(() => {
    // Check if all checkbox items are checked and update setAllChecked state
    const checkboxItemsVal = Object.values(checkboxItems);
    const checkedItems = checkboxItemsVal.filter(item => item == true);
    if (checkedItems.length == users.length) setAllChecked(true);
  }, [checkboxItems]);

  return (
    <div className='max-w-screen-xl mx-auto py-8 px-4 md:px-8'>
      <div className='shadow-sm border rounded-lg overflow-x-auto'>
        <table className='w-full table-auto text-sm text-left'>
          <thead className='text-gray-600 font-medium border-b'>
            <tr>
              <th className='text-center py-3 px-6 flex items-center gap-x-4'>
                <div>
                  <input
                    type='checkbox'
                    id='checkbox-all-items'
                    className='checkbox-item peer hidden'
                    checked={areAllChecked}
                    onChange={handleCheckboxItems}
                  />
                  <label
                    htmlFor='checkbox-all-items'
                    className='relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'
                  ></label>
                </div>
                Name
              </th>
              <th className='text-center py-3 px-6'>Email</th>
              <th className='text-center py-3 px-6'>Role</th>
              <th className='text-center py-3 px-6'>Action</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 divide-y'>
            {users
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((item, idx) => (
                <tr
                  key={idx}
                  className='odd:bg-gray-50 even:bg-white'
                >
                  <td className='text-center px-6 py-4 whitespace-nowrap flex items-center gap-x-4'>
                    <div>
                      <input
                        type='checkbox'
                        id={`checkbox-${idx}`}
                        name={`checkbox-${idx}`}
                        className='checkbox-item peer hidden'
                        checked={checkboxItems[`checkbox${idx}`]}
                        onChange={e => handleCheckboxChange(e, idx)}
                      />
                      <label
                        htmlFor={`checkbox-${idx}`}
                        className='relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'
                      ></label>
                    </div>
                    {item.name}
                  </td>
                  <td className='text-center px-6 py-4 whitespace-nowrap'>
                    {item.email}
                  </td>
                  <td className='text-center px-6 py-4 whitespace-nowrap'>
                    {item.role}
                  </td>
                  <td className='text-center px-6 whitespace-nowrap'>
                    <a
                      href='javascript:void()'
                      className='py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg'
                    >
                      Edit
                    </a>
                    <button
                      href='javascript:void()'
                      className='py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
