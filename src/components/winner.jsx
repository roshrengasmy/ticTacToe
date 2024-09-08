import '../themes/winner.css'

const Winner = ({ winner, isDraw }) => {
    return (
        <div className="winner">
            {isDraw ? <text>Match is Draw</text> : <text>Congratulations!, <span>{winner}</span></text>}
        </div>
    )
}

export default Winner;