import React from 'react';
import Header1 from '../config-components/header/Header1';
import Sidebar from '../sidebar/Sidebar';
import Body1 from '../config-components/cards/Body1';
import Body2 from '../config-components/cards/Body2';


const LandingConfig = () => {
    return (
        <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div className='grid grid-rows-[auto,1fr]'>
                <Header1 />


                <div className='grid grid-cols-12 gap-4'>

                    <div className='col-span-2'>
                        <Sidebar />
                    </div>


                    <div className='col-span-10'>
                        {/* <div className='grid mx-10 my-10 grid-flow-row'> */}
                        <div className='grid grid-rows-[auto,1fr] mx-2 px-4 py-4'>

                            <Header1 />
                            </div>
                            <Body1 />
                            <Body2 />
                            
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default LandingConfig;
