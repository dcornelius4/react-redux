import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentAction';

describe('comment action tests', () => {
  it('creates a comment', () => {
    expect(createComment(4, 'Wassup')).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postId: 4,
        comment: 'Wassup'
      }
    });
  });
  it('deletes a comment', () => {
    expect(deleteComment(4, 4)).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postId: 4,
        commentId: 4
      }
    });
  });
});
