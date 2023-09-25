import React from 'react';
// import Header from '../../config-components/header/Header';
import Body from './Body.json'; 

const BodySection = () => {
  return (
    <div>
      {/* {Body.map((config, index) => (
        <Header key={index} config={config} />
      ))} */}
      
      <div className='bg-gray-100 py-4 px-6 mx-1'>
      {Body.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodySection;
