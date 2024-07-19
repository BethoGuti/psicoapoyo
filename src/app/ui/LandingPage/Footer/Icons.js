import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

export const Icons = () => {
  return (
    <div className="flex flex-row justify-center content-center items-center gap-4">
      <FontAwesomeIcon icon={faFacebookF} width="20px" className="text-gray-light"/>
      <FontAwesomeIcon icon={faInstagram} width="30px" className="text-gray-light"/>
      <FontAwesomeIcon icon={faXTwitter} width="30px" className="text-gray-light"/>
      <FontAwesomeIcon icon={faLinkedinIn} width="30px" className="text-gray-light"/>
    </div>
  );
};
