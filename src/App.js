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

    const boardState = {...this.props.currentSquares};
    boardState[i] = nextSquares;
    const nextHistory = [...this.props.history].concat(boardState);

    dispatch({
      type: "PLAY", history: nextHistory, currentMove : (nextHistory.length - 1), xIsNext: !(this.props.xIsNext) , currentSquares: boardState
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