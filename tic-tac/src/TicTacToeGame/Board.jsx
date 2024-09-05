import React, { useState } from "react";
import Square from "./Square";
import './Board.css';  // Importing the CSS file

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];  // Return the winner "X" or "O"
            }
        }
        return null;
    };

    const winner = checkWinner();

    const handleClicked = (index) => {
        if (state[index] !== null || winner) {
            return;  // Prevent clicking if square is already filled or game is won
        }

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const handleReset  = ()=>{
        setState(Array(9).fill(null));
    }

    return (
        <div className="board-container">
            {winner ? (<h2>{winner} has won! <button className="reset-btn" onClick={handleReset}>Play Again</button></h2>) : (
                <>
                <h4>Player {isXTurn ? 'X':'O'}, it's your turn!</h4>
                    <div className="board-row">
                        <Square onClick={() => handleClicked(0)} value={state[0]} />
                        <Square onClick={() => handleClicked(1)} value={state[1]} />
                        <Square onClick={() => handleClicked(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClicked(3)} value={state[3]} />
                        <Square onClick={() => handleClicked(4)} value={state[4]} />
                        <Square onClick={() => handleClicked(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClicked(6)} value={state[6]} />
                        <Square onClick={() => handleClicked(7)} value={state[7]} />
                        <Square onClick={() => handleClicked(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Board;
