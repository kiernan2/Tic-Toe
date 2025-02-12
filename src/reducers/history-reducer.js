const defaultState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
  xIsNext: true,
  currentSquares: Array(9).fill(null)
}

const reducer = (state = defaultState, action) => {
  const { history, currentMove, xIsNext, currentSquares } = action;
  switch (action) {
    case 'PLAY':
      return Object.assign({}, state, {
        history: history,
        currentMove: currentMove,
        xIsNext: xIsNext,
        currentSquares: currentSquares
      });
    default:
      return state;
  }
};

//  is this right how do I modify these values
export default reducer;