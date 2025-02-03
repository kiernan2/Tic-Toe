import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
// import { type } from "@testing-library/user-event/dist/type";
import Board from "./Board.js";

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      currentMove: true,
      xIsNext: 1
    };
  }

  // const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [currentMove, setCurrentMove] = useState(0);
  // const xIsNext = currentMove % 2 === 0;
  // const currentSquares = history[currentMove];

  handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
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
        <Board>
        </Board>
      </React.Fragment>
    );
  }
  
}
export default Game;