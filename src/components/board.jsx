import Strike from "./strike";
import Tiles from "./tiles";
import '../themes/board.css'

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
    return (
        <div className="board">
            <div className="row1">
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(0)} values={tiles[0]} />
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(3)} values={tiles[3]} />
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(6)} values={tiles[6]} />
            </div>
            <div className="row2">
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(1)} values={tiles[1]} />
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(4)} values={tiles[4]} />
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(7)} values={tiles[7]} />
            </div>
            <div className="row3">
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(2)} values={tiles[2]} />
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(5)} values={tiles[5]} />
                <Tiles playerTurn={playerTurn} onClick={() => onTileClick(8)} values={tiles[8]} />
            </div>
            <Strike strikeClass={strikeClass} />
        </div>
    )
}

export default Board;