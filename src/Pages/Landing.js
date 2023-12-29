
import backgroundImage from '../Assets/bg.jpg'; // Import your background image
import GradientButton from '../Components/GradientButton';

const Landing = () => {
    return <>
      <div
        className="h-screen bg-cover bg-center relative overflow-hidden flex items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 filter blur-lg"></div>

        <div className="text-center w-full relative z-10">
          <h1 className="text-4xl text-white font-bold mb-6">Tic Tac Toe</h1>
              <GradientButton />
        </div>
    </div>
    </>
}

export default Landing;