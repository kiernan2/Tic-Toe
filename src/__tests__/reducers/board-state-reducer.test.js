import boardStateReducer from '../../reducers/board-state-reducer';

describe('boardStateReducer', () => {
  test('', () => {
    expect(boardStateReducer({}, { type: null })).toEqual({});
  });
});