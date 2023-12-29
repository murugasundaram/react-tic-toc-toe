import { faO, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import red from "../../Assets/red.jpeg";
import yellow from "../../Assets/yellow.jpeg";

const Header = (props) => {
  const p1 = props.game && props.game.players ? props.game.players[0] : '';
  const p2 = props.game && props.game.players ? props.game.players[1] : '';

  return (
    <header className="w-full p-4 div1 m-all-center">
      <div>
        <div className="flex items-center">

          <div className="player-div relative flex items-center">
            <div className="player-image-div absolute top-0 left-1/2 transform -translate-x-1/2 -ml-1/4 w-1/2">
              <img src={yellow} className="player-image" alt="Player" />
            </div>

            <div className="text-center ml-auto mr-auto player-middle">
              <span className="font-bold text-lg">{p1}</span>
              <span className="block text-sm player-identity">
                <FontAwesomeIcon className="player1-icon" icon={faXmark} />
              </span>
            </div>
          </div>

          <div className="timer-div ml-auto flex flex-col items-center justify-center">
            <span className="block text-sm remain-text">Time Remaining</span>
            <span className="block font-bold text-lg remain-time">20</span>
          </div>
          

          <div className="player-div ml-auto relative flex items-center">
          <div className="player-image-div absolute top-0 left-1/2 transform -translate-x-1/2 -ml-1/4 w-1/2">
            <img src={red} className="player-image" alt="Player" />
          </div>
          <div className="text-center ml-auto mr-auto player-middle">
            <span className="font-bold text-lg">{p2}</span>
            <span className="block text-sm player-identity">
              <FontAwesomeIcon className="player2-icon" icon={faO} />
            </span>
          </div>
        </div>

        </div>
        <div className="flex items-center">
          <div className="player-points-div">
            Points: 0
          </div>
          <div className="player-points-div ml-auto">
            Points: 0
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
