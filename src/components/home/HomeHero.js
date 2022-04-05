import { Link } from 'react-router-dom';
import classes from './HomeHero.module.css';

const HomeHero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <h1>Serving you since 1989.</h1>
          <p>
            Acme Outdoors is an outdoor and adventure shop located in the
            Boathouse District in Oklahoma City.
          </p>

          <Link to="/shop">
            <button>Shop Merch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
