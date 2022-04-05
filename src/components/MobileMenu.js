import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { toggleMobileMenu } from '../store/actions';
import classes from './MobileMenu.module.css';

const MobileMenu = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={store.mobileMenuVis}
      timeout={300}
      classNames={{
        enterActive: classes.openCart,
        exitActive: classes.closeCart,
      }}
    >
      <div className={classes.hamburgerContainer}>
        <ul>
          <li>
            <Link className={classes.link} onClick={toggleMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} onClick={toggleMenu} to="about">
              About
            </Link>
          </li>
          <li>
            <Link className={classes.link} onClick={toggleMenu} to="shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={classes.link} onClick={toggleMenu} to="donate">
              Donate
            </Link>
          </li>
          <li>
            <Link className={classes.link} onClick={toggleMenu} to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default MobileMenu;
