import React from 'react';
import config from './config.json';

const Sidebar = () => {
    return (
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div className=" bg-white mt-2 h-screen my-30  ">
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
