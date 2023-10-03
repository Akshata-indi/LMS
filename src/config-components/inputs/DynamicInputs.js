


import React from 'react';
import TailwindInputsConfig from './TailwindInputsConfig'; 

const DynamicInputs = () => {

  const inputStyle = TailwindInputsConfig.standard;
  const inputstyle2 = TailwindInputsConfig.boxInput;
  
return (   
    <div className='grid grid-cols-1'>
    {/* <input className={tailwindInputsConfig.text}>
       First Name
    </input> */}
    <input className={inputStyle} type="text" placeholder="Email / Username" />


    {/* <input className={inputstyle2} type="email" placeholder="your email" /> */}
    </div>
    );
  };
export default DynamicInputs;