import  { FC } from 'react';



const BookTable: FC = () => {
  return (
    <div className="m-3">
      <h1 className="text-3xl font-semibold text-center md:text-4xl md:my-6 lg:text-5xl lg:my-12">Reserve A Table</h1>
      <form className="mt-4 lg:mt-6 border-2 border-gray-500 p-3 rounded-md md:m-10 lg:mx-40 lg:p-8">
        <div>
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full pl-4  border border-gray-500 outline-none mt-2 text-lg h-10 rounded-md p-1"
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
            className="w-full pl-4  border text-white border-gray-500 outline-none mt-2 text-lg h-10 rounded-md p-1"
            placeholder="7387927556"
          />
        </div>
        <div className="mt-4 lg:mt-6 flex flex-col ">
          <label htmlFor="people" className="text-lg text-white">
            Seats
          </label>
            <input type="number"  
            placeholder='1, 2, 3, 4, 5'
            className="w-full pl-4  border text-white border-gray-500 outline-none mt-2 text-lg h-10 rounded-md p-1"
            />
        </div>
        <div className="mt-4 lg:mt-6 flex flex-col ">
          <label htmlFor="people" className="text-lg text-white">
            Date
          </label>
          <input type="date" name="" id="" className=' outline-none  text-white border border-gray-500 py-2 pl-3 rounded-md' />
        </div>
        <div className="mt-6 text-center">
          <button className="text-xl bg-orange-400 text-black px-5 py-2 rounded-md font-semibold">Reserve Table</button>
        </div>
      </form>
    </div>
  );
};

export default BookTable;
