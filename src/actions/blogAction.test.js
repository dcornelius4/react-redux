import { createPost, CREATE_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './blogAction';

describe('blog action tests', () => {
  it('creates a post', () => {
    expect(createPost('My first post', 'Hey all')).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'My first post',
        body: 'Hey all'
      }
    });
  });
  it('deletes a post', () => {
    expect(deletePost(4)).toEqual({
      type: DELETE_POST,
      payload: 4
    });
  });
  it('updates a post', () => {
    expect(updatePost(4, 'Issa new post')).toEqual({
      type: UPDATE_POST,
      payload: {
        id: 4,
        body: 'Issa new post'
      }
    });
  });
});
