import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '../Assets/bg2.jpg'; // Import your background image
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import WinnerRow from '../Components/Game/WinnerRow';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resultAction } from '../Store/result';

const Scores = () => {
    const results = useSelector(state => state.result.results);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const filterRes = results.filter(x => x.winner != 'Tie');
    const sortResult = [...filterRes].sort((a, b) => b.winningScore - a.winningScore);

    const resetScores = () => {
        localStorage.removeItem('tic');
        dispatch(resultAction.clearResult())
    }

    return <>
        <div
            className="h-screen bg-cover bg-center relative overflow-hidden items-center above-score-box"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 filter blur-lg"></div>

        <div className="mx-auto text-center text-white relative z-10 score-box">
            <div className='score-top'>
                Score Board
            </div>
            <div className='score-center'>
                {sortResult.map((res, index) => <WinnerRow key={index} winner={res} />)}
            </div>
            <div className='score-bottom' onClick={() => navigate('/')}>
                Play Again
                <FontAwesomeIcon icon={faRotateRight} className='ml-2' />
            </div>
        </div>

        <div className='relative z-10 reset-button mt-4'> {/* Adjust margin-top as needed */}
            <button onClick={resetScores}>Reset All</button>
        </div>
</div>

    </>
}

export default Scores;

