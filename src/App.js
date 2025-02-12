import React from "react";
import PropTypes from "prop-types";
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


  // currentMove = 0
  // history = useState([Array(9).fill(null)])

  // const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [currentMove, setCurrentMove] = useState(0);
  // const xIsNext = currentMove % 2 === 0;
  // const currentSquares = history[currentMove];

  handlePlay = (nextSquares) => {
    const { dispatch } = this.props;
    console.log(this.props)
    const nextHistory = [this.props.history.slice(0, this.props.currentMove + 1), nextSquares];
    dispatch({
      type: "PLAY", history: nextHistory, currentMove : (nextHistory.length - 1)
    })
    // this.state.history = nextHistory;
  };

  jumpTo = (nextMove) => {
    currentMove = (nextMove);
  };

  // const moves = history.map((squares, move) => {
  //   let description;
  //   if (move > 0) {
  //     description = 'Go to move #' + move;
  //   } else {
  //     description = 'Go to game start';
  //   }
  //   return (
  //     <li key={move}>
  //       <button onClick={() => jumpTo(move)}>{description}</button>
  //     </li>
  //   );
  // });

  render() {
    return (
      <React.Fragment>
        <Board xIsNext={this.state.xIsNext} squares={this.state.currentSquares} onPlay={this.handlePlay}>
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