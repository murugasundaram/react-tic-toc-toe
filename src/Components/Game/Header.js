import red from "../../Assets/red.jpeg";
import yellow from "../../Assets/yellow.jpeg";
import { ReactComponent as Xicon } from "../../Assets/x-pack.svg";
import { ReactComponent as Oicon } from "../../Assets/o.svg";

const Header = (props) => {
  const p1 = props.game && props.game.players ? props.game.players[0] : '';
  const p2 = props.game && props.game.players ? props.game.players[1] : '';

  const rounds = props.game ? props.game.rounds : [];
  const scores = props.game ? props.game.scores : [0,0];

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
                <Xicon className="player1-icon" />
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
              <Oicon className="player2-icon" />
            </span>
          </div>
        </div>

        </div>
        <div className="flex items-center">
          <div className="player-points-div">
            Points: {scores[0]} / {rounds ? rounds.length : 0}
          </div>
          <div className="player-points-div ml-auto">
            Points: {scores[1]} / {rounds ? rounds.length : 0}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
