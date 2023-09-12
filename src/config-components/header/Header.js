
import React from 'react'; // Import React if you're using React
import ButtonStyle from '../buttons/ButtonStyle';
import ButtonOutline from '../buttons/ButtonOutline';
import headerStyles from './ConfigHeader';

function Header() {
  return (
    <div className={headerStyles.headerContainer}>
    
      <div className='font-sans text-3xl'>IK-Shiksha</div>
      <div className="flex items-center">  
        <ButtonStyle className="buttonDefault">Click Me</ButtonStyle>
         <ButtonOutline  >Get Started</ButtonOutline>
      </div>
    </div>
  );
}

export default Header;

