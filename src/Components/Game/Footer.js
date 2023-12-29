import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4">
      <div className="chat-div">
        <FontAwesomeIcon icon={faComments } size="md" />
      </div>
    </footer>
  );
};

export default Footer;
