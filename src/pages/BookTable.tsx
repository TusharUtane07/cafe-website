import  { FC, useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { MenuProps } from 'antd';

type MenuItem = {
  key: string;
  label: string;
};

const BookTable: FC = () => {

  const items: MenuItem[] = [
    { key: '1', label: '1' },
    { key: '2', label: '2' },
    { key: '3', label: '3' },
    { key: '4', label: '4' },
    { key: '5+', label: '5+' }
  ];

  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedNumber(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick} items={items} />
  );

  return (
    <div className="m-3">
      <h1 className="text-3xl font-semibold text-center md:text-4xl md:my-6 lg:text-5xl lg:my-12">Reserve A Table</h1>
      <form className="mt-4 lg:mt-6 border border-white p-3 rounded-md md:m-10 lg:mx-40 lg:p-8">
        <div>
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full pl-4  border border-white outline-none mt-2 text-lg h-10 rounded-md p-1"
            placeholder="Tanmay Singh"
          />
        </div>
        <div className="mt-4 lg:mt-6">
          <label htmlFor="number" className="text-lg">
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            className="w-full pl-4  border text-black border-white outline-none mt-2 text-lg h-10 rounded-md p-1"
            placeholder="7387927556"
          />
        </div>
        <div className="mt-4 lg:mt-6 flex flex-col ">
          <label htmlFor="people" className="text-lg text-white">
            Seats
          </label>
          <Dropdown overlay={menu} placement="bottom" arrow>
            <Button className=' font-bold mt-2'>{selectedNumber ? `${selectedNumber}` : '1'}</Button>
          </Dropdown>
        </div>
        <div className="mt-4 lg:mt-6 flex flex-col ">
          <label htmlFor="people" className="text-lg text-white">
            Date
          </label>
          <input type="date" name="" id="" className=' outline-none  text-black border border-white py-2 pl-3 rounded-md' />
        </div>
        <div className="mt-6 text-center">
          <button className="text-xl bg-orange-400 text-black px-5 py-2 rounded-md font-semibold">Reserve Table</button>
        </div>
      </form>
    </div>
  );
};

export default BookTable;
