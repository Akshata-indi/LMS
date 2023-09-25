

import React from 'react';
import cardsConfig from './cardsConfig';

const Card = () => {
  return (
    <div className='bg-gray-700'>
      <div className='grid grid-cols-1  grid-flow-row '>
        {cardsConfig.map((card, index) => (
          <div
            key={index}
            className={`bg-${card.backgroundColor} p-4 rounded-md shadow-md`}
          >
            <h2 className='text-xl font-semibold'>{card.title}</h2>
            <p className='text-gray-900'>{card.description}</p>
            <img
              src={card.imageSrc}
              alt={card.title}
              className='mt-2 w-full h-auto'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

// import React from 'react';
// import cardsConfig from './cardsConfig';

// const Card = () => {
//   // Define the index of the card you want to render
//   const cardIndex = 0; // Change this to the index of the card you want

//   // Get the configuration for the selected card
//   const card = cardsConfig[cardIndex];

//   return (
//     <div className={`bg-gray ${card.marginLeft} ${card.marginTop}`}>
//       <div className='grid grid-cols-5  grid-flow-row'>
//         <div
//           className={`bg-gray ${card.backgroundColor} ${card.padding} ${card.cardStyle}`}
//         >
//           <h2 className='text-xl font-semibold'>{card.title}</h2>
//           <p className='text-gray-600'>{card.description}</p>
//           <img
//             src={card.imageSrc}
//             alt={card.title}
//             className={`mt-2  ${card.width} ${card.height} h-80  `}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



