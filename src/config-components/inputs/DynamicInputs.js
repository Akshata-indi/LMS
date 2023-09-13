


import React from 'react';
import TailwindInputsConfig from './TailwindInputsConfig'; 

const DynamicInputs = () => {

  const inputStyle = TailwindInputsConfig.standard;
  
return (   
    <div className='grid grid-cols-1'>
    {/* <input className={tailwindInputsConfig.text}>
       First Name
    </input> */}
    <input className={inputStyle} type="text" placeholder="Enter your firstname" />
    <input className={inputStyle} type="text" placeholder="Enter your lastname" />
    </div>
    );
  };
export default DynamicInputs;