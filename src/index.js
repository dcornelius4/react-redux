import { createStore } from 'redux';
import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_CHIPS, REMOVE_LUNCH, addDrink, addSandwich, addChips, removeDrink, removeSandwich, removeChips, removeLunch } from './actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    case REMOVE_LUNCH:
      return { initialState };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addDrink('Jarito'));

console.log('added drink', store.getState());

store.dispatch(addSandwich('Turkey and Cheese'));

console.log('added sandwich', store.getState());

store.dispatch(addChips('Sea Salt and Vinegar'));

console.log('added chips', store.getState());

store.dispatch(removeDrink('Jarito'));

console.log('removed drink', store.getState());

store.dispatch(removeSandwich('Turkey and Cheese'));

console.log('removed sandwich', store.getState());

store.dispatch(removeChips('Sea Salt and Vinegar'));

console.log('removed chips', store.getState());

store.dispatch(removeLunch);

console.log('no mo lunch', store.getState());
