import React from 'react';
import SignupContainer from '../session/signup_container';

const Modal = ({modal, closeModal}) => {

  if (modal === 'signup') {
    return (
      <div>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <SignupContainer />
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;