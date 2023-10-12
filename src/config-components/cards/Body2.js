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

import React from 'react'

const Body2 = () => {
  return (
    <div>

         
    </div>
  )
}

export default Body2

