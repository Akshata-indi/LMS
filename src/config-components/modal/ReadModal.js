import React, { useState } from 'react';
import Modal from './Modal';
import modalConfig from './modalConfig.json';

const ReadModal = () => {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="App">
      {modalConfig.map((modal) => (
        <button
          key={modal.id}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setOpenModal(modal)}
        >
          Open {modal.title}
        </button>
      ))}

      {modalConfig.map((modal) => (
        <Modal
          key={modal.id}
          isOpen={openModal === modal}
          onClose={closeModal}
          config={modal}
        />
      ))}
    </div>
  );
};

export default ReadModal;
