
// import React from 'react'; // Import React if you're using React
// import ButtonStyle from '../buttons/ButtonStyle';
// import ButtonOutline from '../buttons/ButtonOutline';
// import headerStyles from './ConfigHeader';

// function Header() {
//   return (
//     <div className={headerStyles.headerContainer}>
    
//       <div className='font-sans text-3xl'>IK-Shiksha</div>
//       <div className="flex items-center">  
//         <ButtonStyle className="buttonDefault">Click Me</ButtonStyle>
//          <ButtonOutline  >Get Started</ButtonOutline>
//       </div>
//     </div>
//   );
// }


// export default Header;

import React from 'react'
// import Buttons from './tailwindButtonsConfig'; 
// import Buttons from './ButtonsConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';

const Header = () => {
  return (
    <div className='bg-purple-100 min-h-screen'>
        <div className='grid grid-cols-1  grid-flow-row'>
            <div className='  col-span-12 bg-white shadow-lg min-h-[70px] flex justify-end items-center'>
            <button className={TwdButtonsConfig.hover} >
            Contact us
            </button>
            <button className={TwdButtonsConfig.primary} >
            Get Started
            </button>  
             
            </div>
            
            
      </div>
     </div>

)
}

export default Header;
  
 



