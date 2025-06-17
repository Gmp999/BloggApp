import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-violet-950 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <span className="text-sm mb-4 sm:mb-0">© 2025 GMP'S Blogging Page. All rights reserved.</span>
        <div className="flex space-x-6">
          <a href="https://github.com/Gmp999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/goutham-mp-139070241/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-gray-400" />
          </a>
          <a href="mailto:gouthammp018@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
