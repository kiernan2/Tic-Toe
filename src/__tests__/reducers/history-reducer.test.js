import historyReducer from '../../reducers/history-reducer';

describe('historyReducer', () => {

  let action;
  const boardData = {
    
  }
  test('', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });
});