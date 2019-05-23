import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentAction';
import { deletePost } from '../actions/blogAction';

describe('Comment Reducer', () => {
  it('handles the create comment action', () => {
    const newState = reducer({}, createComment(1, 'Is a lit comment'));

    expect(newState).toEqual({
      1: ['Is a lit comment']
    });
  });

  it('handles the create comment action with existing comments', () => {
    const initialState = {
      1: ['I was here first']
    };
    const newState = reducer(initialState, createComment(1, 'Is a lit comment'));

    expect(newState).toEqual({
      1: ['I was here first', 'Is a lit comment']
    });
  });

  it('handles the delete comment action', () => {
    const initialState = {
      1: ['I was here first', 'Is a lit comment']
    };
    const newState = reducer(initialState, deleteComment(1, 0));

    expect(newState).toEqual({
      1: ['Is a lit comment']
    });
  });

  it('handles the delete post action', () => {
    const initialState = {
      1: ['I was here first', 'Is a lit comment'],
      2: ['Being number 2 isn\'t that bad']
    };
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual({
      2: ['Being number 2 isn\'t that bad']
    });
  });
});
