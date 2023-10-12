import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'

const Search = () => {
  return (
    <div>
        {/* <div className='bg-white h-16 px-4 flex justify-between items-center'> */}
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 '/>
           <input
           type="text"
           placeholder="Search..."
           className='text-sm focus:outline-none active:outline-none h-7 w-[15rem] border border-gray-300 rounded-sm mx-2 my-4 pl-11 '
           />
            </div>
        </div>

  
    // </div>
  )
}

export default Search;