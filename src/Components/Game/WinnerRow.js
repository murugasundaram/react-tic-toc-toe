import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WinnerRow = (props) => {

    const winnerName = props.winner.winner;
    const score = props.winner.winningScore;

    let stars = [];

    for (let i = 0; i < score; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />)
    }

    return <div className='one-score clearfix'>
        <div className='score-name'>
            {winnerName}
        </div>
        <div className='score-star'>
            {stars.map(star => star)}
        </div>
    </div>
}

export default WinnerRow;