import { useNavigate } from "react-router-dom";

const FillDetails = () => {
    const navigate = useNavigate();

    return <div className="h-screen bg-game overflow-y-hidden player-details-div flex flex-col justify-center items-center">
    
    <div className="mb-6">
        <h2 className="text-white text-center text-lg">Players details</h2>
    </div>

    <div className="w-full mb-4">
      <label htmlFor="firstInput" className="block text-sm font-medium player-name">
        Name of Player 1
      </label>
      <input
        type="text"
        id="firstInput"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 player-details-input"
      />
    </div>
  
    <div className="w-full mb-4">
      <label htmlFor="secondInput" className="block text-sm font-medium player-name">
      Name of Player 2
      </label>
      <input
        type="text"
        id="secondInput"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 player-details-input"
      />
    </div>
  
    <div className="w-full mb-4">
      <label htmlFor="dropdown" className="block text-sm font-medium player-name">
        Number of Rounds
      </label>
      <select id="dropdown" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 player-details-input">
        <option value="1">One</option>
        <option value="3">Three</option>
        <option value="5">Five</option>
      </select>
    </div>
  
    {/* Button */}
    <div className="flex items-center justify-center bg-game overflow-y-hidden" style={{ marginTop: '30px' }}>
        <button className="px-3 py-2 bg-black text-white rounded-md mr-4" onClick={() => navigate('/')}>Back</button>
        <button className="px-3 py-2 bg-yellow-500 text-black rounded-md" onClick={() => navigate('/game/play')}>Play Now</button>
    </div>

  </div>
  
  
}

export default FillDetails;