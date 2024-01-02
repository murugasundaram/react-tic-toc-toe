// Modal.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalAction } from '../Store/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Modal = () => {
  const showModal = useSelector(state => state.modal.showModal);
  const modalContent = useSelector(state => state.modal.modalContent);

  const dispatch = useDispatch();

  const closeModal = () => dispatch(ModalAction.closeModal())

  return (
    <div>
      {showModal && (
        <div className="fixed bg-gray-500 bg-opacity-75 transition-opacity inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                    
                  <FontAwesomeIcon icon={faCheck} />

                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Congratulations</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{modalContent}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto" onClick={closeModal}>Play Next Round</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeModal}>Exit</button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
