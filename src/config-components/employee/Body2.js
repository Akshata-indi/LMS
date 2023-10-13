// import React from 'react';
// import cardsConfig from './cardsConfig';

// const CardComponent = ({ id, className }) => (
//   <div className={className}>
//     {/* Content of the card */}
//   </div>
// );

// const Body2 = () => {
//   // Define the ID of the card you want to render
//   const cardIdToRender = 'card2';

//   // Find the card with the specified ID in the configuration
//   const cardToRender = cardsConfig.find((card) => card.id === cardIdToRender);

//   // Define the number of times you want to render the card
//   const numberOfTimesToRender = 1; // Change this as needed

//   // Create an array of card elements to render
//   const cardElements = Array(numberOfTimesToRender).fill().map((_, index) => (
//     <div key={`customCard-${index}`}>
//       {cardToRender && (
//         <CardComponent key={cardToRender.id} {...cardToRender} />
//       )}     
//     </div>
//   ));

//   return (
//     <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8'>
//       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 shadow-sm  my-10 mx-7 grid-flow-row '>
//         {cardElements}
//       </div>
//     </div>
//   );
// };

// export default Body2;

// import React from 'react';
// import cardsConfig from './cardsConfig'; // Import your card configuration array

// const Body2 = () => {
//   // Find the card with ID 'card2'
//   const card2 = cardsConfig.find((card) => card.id === 'card2');

//   // Define the image URL
//   const imageURL = "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600";

//   return (
//     <div className="grid grid-cols-1 gap-4">
//       <div className={`mx-6 w-80 my-6 ${card2.className}`}>
//         <img src={imageURL} alt="Card Image" className="w-80 h-[80%] object-cover" />
       
//         {/* Content for card2 */}
//       </div>
//       {/* <div className={`mx-6 my-6 ${card2.className}`}> */}
       
       
//       {/* </div> */}
//     </div>
//   );
// }

// export default Body2;

// import React from 'react';
// import cardsConfig from '../cards/cardsConfig';
// import Cards from './Cards.json' 
// import { Carousel } from 'react-responsive-carousel';


// const Body2 = () => {
//   // const card2 = cardsConfig.find((card) => card.id === 'card2');
//   const imageURL = Cards.img; // Extract the image URL from the JSON data

//   return (
//     <div className="w-1/2 bg-custom-color p-8 flex items-center justify-center">
//     <Carousel showThumbs={false} width="300px">
//       <div className="text-center w-64 h-64 flex items-center justify-center">
//         <img src={imageURL} alt="Card Image" />
//       </div>

//       <div className="w-64 h-64 flex items-center justify-center">
//         <img src={imageURL} alt="Card Image" />
//       </div>

//       <div className="w-64 h-64 flex items-center justify-center">
//         <img src={imageURL} alt="Card Image" />
//       </div>
//     </Carousel>
//   </div>
    
//   );
// }

// export default Body2;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Cards from './Cards.json';
import cardsConfig from '../cards/cardsConfig';

const Body2 = () => {
  const card2 = cardsConfig.find((card) => card.id === 'card2');   
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className={`mx-6 w-auto my-6 h-[94%] ${card2.className}`}>
    <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} >
      
      {Cards.map((item) => (
        
        <div key={item.id} className=" ">
          <img src={item.img} alt={`Card Image ${item.id}`} className="w-auto h-60 object-cover" />
          
        </div>

      ))}
      
      
    </Carousel>
    </div>
    <div className='grid grid-row-2 relative flex items-center'>
            <div id='slider' className='w-auto h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                 {Cards.map((item) => (
                    <img
                    className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                    src={item.img}
                    alt='/'
                    />
                ))}
            </div>
            </div>

    </div>
  );
}

export default Body2;




