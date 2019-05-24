import { createStore } from 'redux';
import reducer from './reducers/lunchReducer';


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
  type: 'REMOVE_LUNCH'
});

console.log('no mo lunch', store.getState());
