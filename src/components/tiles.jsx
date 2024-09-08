import "../themes/tiles.css"

const Tiles = ({ values, onClick, playerTurn }) => {
    let hover = null;
    if (playerTurn != null && values == null)
        hover = `${playerTurn.toLowerCase()}-hover`
    return (
        <div onClick={onClick} className={`tiles ${hover}`}>
            <text>{values}</text>
        </div>
    )
}

export default Tiles;