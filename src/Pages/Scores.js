import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backgroundImage from '../Assets/bg2.jpg'; // Import your background image
import { faRotateRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import WinnerRow from '../Components/Game/WinnerRow';
import { useNavigate } from 'react-router-dom';

const Scores = () => {
    const results = useSelector(state => state.result.results);
    const navigate = useNavigate();

    return <>
        <div
            className="h-screen bg-cover bg-center relative overflow-hidden flex items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 filter blur-lg"></div>

            <div className="mx-auto text-center text-white relative z-10 score-box">
                <div className='score-top'>
                    Score Board
                </div>
                <div className='score-center'>
                    {results.map((res, index) => <WinnerRow key={index} winner={res} />)}
                </div>
                <div className='score-bottom' onClick={() => navigate('/')}>
                    Play Again
                    <FontAwesomeIcon icon={faRotateRight} className='ml-2' />
                </div>
            </div>

        </div>
    </>
}

export default Scores;

