import React from 'react';
import cardsConfig from './cardsConfig';

const CardComponent = ({ id, className }) => (
  <div className={className}>
    {/* Content of the card */}
  </div>
);

const Body1 = () => {
  // Define the ID of the card you want to render
  const cardIdToRender = 'card1';

  // Find the card with the specified ID in the configuration
  const cardToRender = cardsConfig.find((card) => card.id === cardIdToRender);

  // Define the number of times you want to render the card
  const numberOfTimesToRender = 4; // Change this as needed

  // Create an array of card elements to render
  const cardElements = Array(numberOfTimesToRender).fill().map((_, index) => (
    <div key={`customCard-${index}`}>
      {cardToRender && (
        <CardComponent key={cardToRender.id} {...cardToRender} />
      )}
    </div>
  ));

  return (
    <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8'>
      <div className='grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-7 grid-flow-row '>
        {cardElements}
      </div>
    </div>
  );
};

export default Body1;
