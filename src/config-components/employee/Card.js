// import React from 'react'
// import Data from '../employee/Data'
// function Card(){
//     return(
        
//         <>
//         <img
//         className='w-full h-[400px] object-cover'
//         src= "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600"
//         alt=''
//         />
//         <div className='relative flex items-center'>
//             <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
//                 {Data.map((item) => (
//                     <img
//                     className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
//                     src={item.img}
//                     alt='/'
//                     />
//                 ))}
//             </div>
//         </div>
//         </>
//     )
// }
// export default Card;

// import React from 'react';
// import Data from '../employee/Data';
// import Header1 from '../header/Header1';
// import Body2 from '../cards/Body2';

// function Card() {
  


//   return (
//     <div>
//       <Header1 />
//       <div className='container mx-auto my-4 px-6 md:px-24'>
//       <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
//         <img
//           className='w-full h-[300px] md:w-[1000px] md:h-[300px] object-cover'
//           src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600"
//           alt=''
//         />
//         {/* <div className='relative flex items-center'>
//             <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
//                 {Data.map((item) => (
//                     <img
//                     className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
//                     src={item.img}
//                     alt='/'
//                     />
//                 ))}
//             </div>
//         </div> */}
//       </div> 
//       </div>
//       <div>

//     {/* <Body2 /> */}

    
//     </div>
//     </div>
//   );
// }

// export default Card;
  

import React from 'react';
// import Cards from '../employee/Cards.json';
import Body2 from './Body2';

function Card() {
  return (
    <div>
     
      <Body2  />
     
    </div>
  );
}

export default Card;
