
  

// <div class="flex h-screen bg-gray-100">
  
//   <div class="w-64 bg-white border-r">
//   {/* <nav className="space-y-2 px-6 py-4">
//     <a href="/home" className="block text-gray-600 hover:text-blue-500">Home</a>
//     <a href="/about" className="block text-gray-600 hover:text-blue-500">About</a>
//     <a href="/services" className="block text-gray-600 hover:text-blue-500">Services</a>
    
//   </nav> */}




import React from 'react';
import config from './config.json'

const Sidebar = () => {
  return (
    <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
    <div className="flex bg-white border border-r-gray-500 h-screen bg-gray-100">
    {/* <div className="w-64 bg-white border-r"> */}
      


      {/* Navigation Links */}
      <nav className=" ">
        {config.map((link) => (
          <a key={link.url} href={link.url} className={link.classes}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
     </div>
  );
};

export default Sidebar;
