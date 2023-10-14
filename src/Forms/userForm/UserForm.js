import React from 'react';

const UserForm = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

      <div className='grid grid-cols-1 grid-flow-row'>
        <div className='grid grid-cols-12 bg-white shadow-sm min-h-[70px] border flex justify-between items-center'>
          
        </div>
       
        <div className='  grid grid-cols-2 grid-flow-row flex justify-center'>
          <form className="bg-gray border border-gray-300 shadow-md rounded w-80 h-80 mx-10 my-20 flex justify-center ">
            
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default UserForm;
