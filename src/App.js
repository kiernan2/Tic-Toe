import React from "react";
import { connect } from 'react-redux';
import Board from "./Board.js";

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      currentMove: 0,
      xIsNext: true,
      currentSquares: Array(9).fill(null)
    };
  }

  handlePlay = (nextSquares, i) => {
    const { dispatch } = this.props;
    const boardState =  [...this.props.currentSquares];
    boardState[i] = nextSquares;
    const nextHistory = [...this.props.history].concat(boardState);
    console.log(calculateWinner(boardState))

    dispatch({
      type: "PLAY", history: nextHistory, currentMove: (nextHistory.length - 1), xIsNext: !(this.props.xIsNext), currentSquares: boardState
    });
  };

  jumpTo = (nextMove) => {
    this.props.currentMove = (nextMove);
  };

  render() {
    return (
      <React.Fragment>
        <Board xIsNext={this.props.xIsNext} squares={this.props.currentSquares} onPlay={this.handlePlay}>
        </Board>
      </React.Fragment>
    );
  }
}

function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

const calculateWinner = (boardState) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const playerOnePositions = getAllIndexes(boardState, "X");
  const playerTwoPositions = getAllIndexes(boardState, "O");

  lines.forEach(element => {
    if (playerOnePositions.includes(element[0]) && playerOnePositions.includes(element[1]) && playerOnePositions.includes(element[2])) {
      console.log("playerOneWin")
      return true }
    else if (playerTwoPositions.includes(element[0]) && playerTwoPositions.includes(element[1]) && playerTwoPositions.includes(element[2])) {
      console.log("playerTwoWin")
      return true }
    else {return false}
  });

};

const mapStateToProps = state => {
  return {
    history: state.history,
    currentMove: state.currentMove,
    xIsNext: state.xIsNext,
    currentSquares: state.currentSquares
  };
};

Game = connect(mapStateToProps)(Game);

export default Game;