
import React from 'react'
import LogoConfig from '../logo/LogoConfig';

const Header1 = () => {
    return (
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

            <div className='grid grid-cols-1 grid-flow-row'>

                <div className='grid grid-cols-12 bg-white shadow-sm min-h-[70px] border flex justify-between items-center'>
                    <LogoConfig />

                {/* <div className='grid grid-cols-12 w-screen bg-white shadow-md min-h-[70px] flex items-center'>
                    <div className='grid grid-cols-12 bg-white shadow-sm min-h-[70px] border border-gray-500 flex  justify-between items-center'>
                    </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header1;






