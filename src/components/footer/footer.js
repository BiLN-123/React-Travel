import './Footer.scss';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoBehance, BiLogoTwitter } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-content">
          <h1>BiLN2B</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div className="footer-top-icon">
          <a href="/">
            <BiLogoFacebookSquare />
          </a>
          <a href="/">
            <BiLogoInstagramAlt />
          </a>
          <a href="/">
            <BiLogoBehance />
          </a>
          <a href="/">
            <BiLogoTwitter />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-title">
          <h4>Project</h4>
          <a href='/'>Changelog</a>
          <a href='/'>Status</a>
          <a href='/'>License</a>
          <a href='/'>All Versions</a>
        </div>
        <div className="footer-bottom-title">
          <h4>Community</h4>
          <a href='/'>GitHub</a>
          <a href='/'>Issues</a>
          <a href='/'>Project</a>
          <a href='/'>Twitter</a>
        </div>
        <div className="footer-bottom-title">
          <h4>Help</h4>
          <a href='/'>Supports</a>
          <a href='/'>TroubleShooting</a>
          <a href='/'>Contact Us</a>
        </div>
        <div className="footer-bottom-title">
          <h4>Others</h4>
          <a href='/'>Terms Of Service</a>
          <a href='/'>Privacy Policy</a>
          <a href='/'>License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
