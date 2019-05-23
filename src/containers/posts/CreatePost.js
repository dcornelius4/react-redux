import { connect } from 'react-redux';
import { createPost } from '../../actions/blogAction';
import PostForm from '../../components/posts/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);

