import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentSelector';
import { deleteComment } from '../../actions/commentAction';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  deleteComment(commentId) {
    dispatch(deleteComment(postId, commentId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
