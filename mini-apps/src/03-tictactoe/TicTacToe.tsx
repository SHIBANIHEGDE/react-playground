import Tile from "./Tile";
import "./TicTacToe.css"
import { useState } from "react";
const TicTacToe = () => {
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [history, setHistory] = useState([]);
    function calculateWinner(squares: Array<number | null>) {
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
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const winner = calculateWinner(squares);
    const status = !winner ? 'Next player: ' + (isXTurn ? 'X' : 'O') : `Winner : ${winner}` ;
    const handleClick = (index: number) => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }
       // setHistory(prev=> { return [...prev, squares]});
        const newSquares = [...squares];
        if (isXTurn) {
            newSquares[index] = 'X';
        }
        else {
            newSquares[index] = 'O';
        }
        setIsXTurn(!isXTurn);
        setSquares(newSquares);

    }

    return (
        <>
            <div>{status}</div>
            <div className="board-container">
                <div className="board-row">
                    <Tile value={squares[0]} handleClick={() => { handleClick(0) }} />
                    <Tile value={squares[1]} handleClick={() => { handleClick(1) }} />
                    <Tile value={squares[2]} handleClick={() => { handleClick(2) }} />
                </div>
                <div className="board-row">
                    <Tile value={squares[3]} handleClick={() => { handleClick(3) }} />
                    <Tile value={squares[4]} handleClick={() => { handleClick(4) }} />
                    <Tile value={squares[5]} handleClick={() => { handleClick(5) }} />
                </div>
                <div className="board-row">
                    <Tile value={squares[6]} handleClick={() => { handleClick(6) }} />
                    <Tile value={squares[7]} handleClick={() => { handleClick(7) }} />
                    <Tile value={squares[8]} handleClick={() => { handleClick(8) }} />
                </div>
            </div>
        </>
    );
};

export default TicTacToe;
