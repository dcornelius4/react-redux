import React from 'react';
import PropTypes from 'prop-types';

function Comment({ id, comment, deleteComment }) {
  return (
    <section>
      <p>{comment}</p>
      <button onClick={deleteComment.bind(null, id)}>Delete</button>
    </section>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;

