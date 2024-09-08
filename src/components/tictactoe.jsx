import Board from "./board";
import PlayAgain from "./playAgain";
import Winner from "./winner";
import "../themes/tictactoe.css";
import { useEffect, useState } from "react";
import gameOverSound from '../sounds/gameOverSound.mov';
import clickSound from '../sounds/clickSound.mov';

const Player_O = "O";
const Player_X = "X";

const TicTacToe = () => {

    let [tiles, setTiles] = useState(Array(9).fill(null));
    let [playerTurn, setPlayerTurn] = useState(Player_O);
    let [strikeClass, setStrikeClass] = useState('');
    let [winner, setWinner] = useState();
    let [isDraw, setIsDraw] = useState(false);
    let gameOver = new Audio(gameOverSound);
    gameOver.volume = 0.4;
    let click = new Audio(clickSound);
    click.volume = 0.4;

    useEffect(() => {
        checkWinner(tiles);
    }, [tiles])

    useEffect(() => {
        if (tiles.some((tile) => tile !== null)) {
            click.play();
        }
    }, [tiles])

    useEffect(() => {
        if (winner || isDraw) {
            gameOver.play()
        }
    }, [winner, isDraw])

    const handlePlayer = (index) => {
        if (winner) {
            return 0;
        }
        if (tiles[index] !== null)
            return 0;
        let newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if (playerTurn === Player_O)
            setPlayerTurn(Player_X)
        else
            setPlayerTurn(Player_O)
    }

    const checkWinner = (tiles) => {
        if (tiles[0] === tiles[1] && tiles[1] === tiles[2] && tiles[2] !== null) {
            setStrikeClass("strike-row1");
            setPlayerTurn();
            setWinner(tiles[2]);
            return 0;
        }
        if (tiles[3] === tiles[4] && tiles[4] === tiles[5] && tiles[5] !== null) {
            setStrikeClass("strike-row2");
            setPlayerTurn();
            setWinner(tiles[5]);
            return 0;
        }
        if (tiles[6] === tiles[7] && tiles[7] === tiles[8] && tiles[8] !== null) {
            setStrikeClass("strike-row3");
            setPlayerTurn();
            setWinner(tiles[8]);
            return 0;
        }
        if (tiles[0] === tiles[3] && tiles[3] === tiles[6] && tiles[6] !== null) {
            setStrikeClass("strike-column1");
            setPlayerTurn();
            setWinner(tiles[6]);
            return 0;
        }
        if (tiles[1] === tiles[4] && tiles[4] === tiles[7] && tiles[7] !== null) {
            setStrikeClass("strike-column2");
            setPlayerTurn();
            setWinner(tiles[7])
            return 0;
        }
        if (tiles[2] === tiles[5] && tiles[5] === tiles[8] && tiles[8] !== null) {
            setStrikeClass("strike-column3");
            setPlayerTurn();
            setWinner(tiles[2])
            return 0;
        }
        if (tiles[0] === tiles[4] && tiles[4] === tiles[8] && tiles[8] !== null) {
            setStrikeClass("strike-diagonal1");
            setPlayerTurn();
            setWinner(tiles[8])
            return 0;
        }
        if (tiles[2] === tiles[4] && tiles[4] === tiles[6] && tiles[6] !== null) {
            setStrikeClass("strike-diagonal2");
            setPlayerTurn();
            setWinner(tiles[6])
            return 0;
        }
        let checkTiles = tiles.every((tile) => tile != null)
        if (checkTiles) {
            setIsDraw(true)
        }
    }

    const playAgain = () => {
        setTiles(Array(9).fill(null));
        setStrikeClass('');
        setPlayerTurn(Player_O);
        setWinner();
        setIsDraw(false);
    }

    return (
        <div className="container">
            <h1>Tic Tac Toe Game in <span>React</span></h1>
            <Board strikeClass={strikeClass} playerTurn={playerTurn} tiles={tiles} onTileClick={handlePlayer} />
            {(winner || isDraw) &&
                <div>
                    <Winner winner={winner} isDraw={isDraw} />
                    <PlayAgain playAgain={playAgain} />
                </div>
            }
        </div>
    )
}

export default TicTacToe;