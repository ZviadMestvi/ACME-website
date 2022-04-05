import { Fragment } from 'react';
import classes from './Footer.module.css';
import logo from '../assets/home/logo.svg';
import twitter from '../assets/home/twitter-logo.svg';
import facebook from '../assets/home/facebook-logo.svg';
import instagram from '../assets/home/instagram-logo.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home/');
  };

  return (
    <Fragment>
      <footer>
        <div className={classes.footerContainer}>
          <div className={classes.socialsContainer}>
            <div>
              <img
                src={logo}
                alt="website logo"
                className={classes.logo}
                onClick={goToHome}
              />
            </div>
            <div>
              <img
                src={twitter}
                alt="twitter logo"
                className={classes.socials}
              />

              <img
                src={facebook}
                alt="facebook logo"
                className={classes.socials}
              />

              <img
                src={instagram}
                alt="instagram logo"
                className={classes.socials}
              />
            </div>
          </div>
          <p>Made by Zvio Mestvi | Design from Webflow</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
