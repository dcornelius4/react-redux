import reducer from './postReducer';
import { createPost, deletePost, updatePost } from '../actions/blogAction';

describe('post reducer', () => {
  it('handles the create post action', () => {
    const newState = reducer([], createPost('Mah post', 'Is a lit post'));

    expect(newState).toEqual([
      { title: 'Mah post', body: 'Is a lit post' }
    ]);
  });

  it('handles the delete post action', () => {
    const initialState = [
      { title: 'Mah post', body: 'Is a lit post' },
      { title: 'Mah post1', body: 'Is a lit post' },
      { title: 'Mah post2', body: 'Is a lit post' }
    ];
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual([
      { title: 'Mah post', body: 'Is a lit post' },
      { title: 'Mah post2', body: 'Is a lit post' }
    ]);
  });

  it('handles the update post action', () => {
    const initialState = [
      { title: 'Mah post', body: 'Is a lit post' },
      { title: 'Mah post1', body: 'Is a lit post' },
      { title: 'Mah post2', body: 'Is a lit post' }
    ];
    const newState = reducer(initialState, updatePost(1, 'UPDATED'));

    expect(newState).toEqual([
      { title: 'Mah post', body: 'Is a lit post' },
      { title: 'Mah post1', body: 'UPDATED' },
      { title: 'Mah post2', body: 'Is a lit post' }
    ]);
  });
});
