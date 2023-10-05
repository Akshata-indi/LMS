import React from 'react';
import Header1 from '../header/Header1';







const LandingBody = () => {
   
    return (
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div className='grid grid-rows-[auto,1fr] '>
                    <Header1  /> 
                    <div>
                        hii
                    </div>
{/*                     
                <div className='grid grid-cols-12 gap-4'>
                     <div className='col-span-2 w-60 border border-r-gray-200 '> 
                        <Sidebar />
                    </div>
                <div className='col-span-10'>
                     <div className='grid grid-flow-row px-1 py-3 justify-end items-end'>
                            <Search />
                        </div>
                            <Body1 />
                            <Body2 />
                        </div>
                    </div> */}
                </div>
            </div>
        );
}

export default LandingBody;
