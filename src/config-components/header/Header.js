
import React from 'react'
import LogoConfig from '../logo/LogoConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import "../../scss/colors-vars.module.scss";
   

const Header = () => {
  return (
    <div className='bg-gray'>
        <div className='grid grid-cols-1  grid-flow-row'>
            <div className='col-span-12 bg-white shadow-sm min-h-[60px] flex mx-5 justify-between items-center'> 
              <LogoConfig />
              
              <div>
            <button className={`${TwdButtonsConfig.hover} `}>
            Contact us
            </button>
            <button className= {`${TwdButtonsConfig.primary}  ml-3 `}>
            Get Started
            </button>  
            </div>

          
        </div>
    </div>
     
</div>


            
    


)
}

export default Header;
  





