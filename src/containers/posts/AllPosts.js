import { connect } from 'react-redux';
import { getPosts } from '../../selectors/postSelector';
import Posts from '../../components/posts/Posts';
import { deletePost } from '../../actions/blogAction';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  deletePost(id) {
    dispatch(deletePost(id));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Posts);
