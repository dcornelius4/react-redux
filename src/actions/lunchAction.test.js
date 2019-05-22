import { addDrink, ADD_DRINK, addSandwich, ADD_SANDWICH, addChips, ADD_CHIPS, removeDrink, REMOVE_DRINK, removeSandwich, REMOVE_SANDWICH, removeChips, REMOVE_CHIPS, removeLunch, REMOVE_LUNCH } from './lunchActions';

describe('lunch action tests', () => {
  it('adds a drink', () => {
    expect(addDrink('Jarito')).toEqual({
      type: ADD_DRINK,
      payload: 'Jarito'
    });
  });

  it('adds a sandwich', () => {
    expect(addSandwich('Turkey and Cheese')).toEqual({
      type: ADD_SANDWICH,
      payload: 'Turkey and Cheese'
    });
  });
  it('adds chips', () => {
    expect(addChips('Sea Salt and Vinegar')).toEqual({
      type: ADD_CHIPS,
      payload: 'Sea Salt and Vinegar'
    });
  });
  it('removes a drink', () => {
    expect(removeDrink('Jarito')).toEqual({
      type: REMOVE_DRINK,
      payload: 'Jarito'
    });
  });
  it('removes a sandwich', () => {
    expect(removeSandwich('Turkey and Cheese')).toEqual({
      type: REMOVE_SANDWICH,
      payload: 'Turkey and Cheese'
    });
  });
  it('removes chips', () => {
    expect(removeChips('Sea Salt and Vinegar')).toEqual({
      type: REMOVE_CHIPS,
      payload: 'Sea Salt and Vinegar'
    });
  });
  it('removes the lunch', () => {
    expect(removeLunch()).toEqual({
      type: REMOVE_LUNCH
    });
  });
});
