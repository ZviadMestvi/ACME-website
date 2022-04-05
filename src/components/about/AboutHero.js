import { Link } from 'react-router-dom';
import classes from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <h1>Your Adventure Awaits</h1>
          <p>
            Acme Outdoors has everything you need to help you get started today.
            Check out our wonderful collection of gear that will make your next
            adventure complete.
          </p>
          <Link to="/shop">
            <button>Shop Merch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
