import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GameWinner = () => {
    const navigate = useNavigate();
    const results = useSelector(state => state.result.results);
    const copyRes = [ ...results ]
    const lastRes = copyRes.pop();
    let starIcons = [];

    for (let i = 0; i < lastRes.winningScore; i++) {
        starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className={`star star-${i+1}-${lastRes.winningScore}`} />)
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
                {lastRes.winner} Won {lastRes.winningScore} stars
            </div>
        </div>
        <div className='text-center'> 
            <button className="show-score-btn" onClick={() => navigate('/')}>View Scoreboard</button>
        </div>
    </div>
}

export default GameWinner;