import checkmark from '../../assets/about/checkmark.svg';
import shoppingCart from '../../assets/about/shopping-cart.svg';
import truck from '../../assets/about/truck.svg';
import chatbox from '../../assets/about/chatbox.svg';
import classes from './AboutS1.module.css';

const AboutS1 = () => {
  return (
    <section>
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <h5>Why acme outdoors?</h5>
          <h2>We're the best in the business.</h2>
          <p>
            From more than 30 years, we've been leading the way across Oklahoma
            — creating the best possible customer experience since 1989.
          </p>
        </div>

        <div className={classes.aboutContainer}>
          <div>
            <img src={checkmark} alt="checkmark" />
            <h3>Lifetime Warranty</h3>
            <p>
              All our products — whether we make them or not — are backed by our
              lifetime warranty.
            </p>
          </div>

          <div>
            <img src={shoppingCart} alt="shopping cart" />
            <h3>Shopping Experience</h3>
            <p>
              All our products — whether we make them or not — are backed by our
              lifetime warranty.
            </p>
          </div>

          <div>
            <img src={truck} alt="truck" />
            <h3>On-time Delivery</h3>
            <p>
              All our products — whether we make them or not — are backed by our
              lifetime warranty.
            </p>
          </div>

          <div>
            <img src={chatbox} alt="chatbox" />
            <h3>Best in Class Service</h3>
            <p>
              All our products — whether we make them or not — are backed by our
              lifetime warranty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutS1;
