

import React from 'react';
import LandingConfig from './LandingConfig';
import LogoConfig from '../logo/LogoConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import Sidebar from '../../sidebar/Sidebar';
import Body1 from '../cards/Body1';
import Search from '../header/Search';
import Body2 from '../employee/Body2';
import Card from '../employee/Card';

const LandingBody = () => {
  // Choose the button configuration you want to use (e.g., "primary")
  const buttonConfig = LandingConfig.default.Header1;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      <div className={buttonConfig}>
        <div className='col-span-12 flex mx-5 justify-between items-center'>
          <LogoConfig />
          <button className={` ${LandingConfig.default.buttons.primary} ml-6  `}>
            Contact us
          </button>
        </div>
      </div>
      <div className='col-span-2'>  
        <div className='flex'>
          <Sidebar />
          <div className='col-span-10'>
            <div className='grid  px-1 py-3 flex justify-self-end items-end'>
              <Search className='mx-2' />
              <Body1 />
              {/* <Body2 /> */}
              <Body1 />
              {/* <Card /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBody;
