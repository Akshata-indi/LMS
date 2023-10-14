import React from 'react';
import LogoConfig from '../../logo/LogoConfig';
import TwdButtonsConfig from '../../buttons/TwdButtonsConfig';

const UserForm = () => {
    const buttonConfig = LandingConfig.default.Header1;


  return (
    <div className="grid grid-cols-1 place-items-center ">
        <div className='col-span-12 flex mx-5 justify-between items-center'>
          {/* <LogoConfig /> */}
          <button className={` ${TwdButtonsConfig.primary} ml-6  `}>
            Contact us
          </button>
          </div>
      <form className="bg-gray border border-gray-300 shadow-md rounded w-80 h-80 mx-10 my-20">
      
      </form>
   
    </div>
  );
};

export default UserForm;
