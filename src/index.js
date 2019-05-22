import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'REMOVE_LUNCH':
      return { initialState };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Jarito'
});

console.log('added drink', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Turkey and Cheese'
});

console.log('added sandwich', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Sea Salt and Vinegar'
});

console.log('added chips', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'Jarito'
});

console.log('removed drink', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'Turkey and Cheese'
});

console.log('removed sandwich', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'Sea Salt and Vinegar'
});

console.log('removed chips', store.getState());

store.dispatch({
  type: 'REMOVE_LUNCH',
});

console.log('no mo lunch', store.getState());
