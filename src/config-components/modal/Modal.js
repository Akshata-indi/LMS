// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, config }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Semi-transparent overlay for background */}
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

          {/* Modal container */}
          <div className="modal-container bg-white p-10 rounded-lg shadow-md relative z-10">
            <h2 className="text-xl font-semibold mb-2">{config.title}</h2>
            <p className="text-gray-600">{config.content}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-3 py-1 text-white bg-blue-700 rounded-md hover:bg-blue-800"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
