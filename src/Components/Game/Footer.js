import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="p-4 div4 footer-div">
      <div className="chat-div" onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faRightFromBracket} className="pr-1 text-red" /> Exit
      </div>
    </footer>
  );
};

export default Footer;
