import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import PostFormContainer from '../posts/post_form_container';

const PostModal = ({modal, closeModal}) => {

  if (modal === "post") {
    return (
      <div>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <PostFormContainer />
          Hey
        </div>
      </div>
    );
  }
  return null;
}

export default PostModal