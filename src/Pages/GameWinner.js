import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GameWinner = () => {
    const navigate = useNavigate();
    const results = useSelector(state => state.result.results);
    const copyRes = [ ...results ]
    const lastRes = copyRes.pop();
    const winningScore = lastRes && lastRes.winningScore ? lastRes.winningScore : 0;

    let starIcons = [];

    for (let i = 0; i < winningScore; i++) {
        starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className={`star star-${i+1}-${winningScore}`} />)
    }

    return <div className="game-body bg-game overflow-y-hidden d-flex align-items-center justify-content-center">
        <div style={{ marginTop: '25vh' }}>
            <div className='text-white text-center congrts-head'>
                Congratulations
            </div>
            <div className='stars-div'>
                {starIcons.map((star, index) => star)}
            </div>
            <div className='text-white text-center won-head'>
                {lastRes ? lastRes.winner : ''} Won {winningScore} stars
            </div>
        </div>
        <div className='text-center'> 
            <button className="show-score-btn" onClick={() => navigate('/game/scores')}>View Scoreboard</button>
        </div>
    </div>
}

export default GameWinner;