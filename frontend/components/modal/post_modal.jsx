import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import PostFormContainer from '../posts/post_form_container';

const PostModal = ({user, modal, closeModal}) => {

  if (modal === "post") {
    return (
      <div>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-child" id="post-form" onClick={e => e.stopPropagation()}>
          <PostFormContainer user={user}/>
        </div>
      </div>
    );
  }
  return null;
}

export default PostModal