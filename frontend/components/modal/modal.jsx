import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import SignupContainer from '../session/signup_container';

const Modal = ({modal, closeModal}) => {
  console.log(modal)
  // if (!modal) {
  //   return null;
  // }

  return (
    <div>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <SignupContainer />
      </div>
    </div>
  );
}

export default Modal;