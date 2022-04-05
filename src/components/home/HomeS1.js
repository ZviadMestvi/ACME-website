import classes from './HomeS1.module.css';
import circle from '../../assets/home/circle.svg';
import triangle from '../../assets/home/triangle.svg';
import square from '../../assets/home/square.svg';

const HomeS1 = () => {
  return (
    <section>
      <div className={classes.mainContainer}>
        <div className={classes.topContainer}>
          <div className={classes.headingContaienr}>
            <p>Ways to support</p>
            <h2>Support Acme Outdoors.</h2>
          </div>

          <div className={classes.textContainer}>
            <p>
              COVID-19 has forced us to close our retail space, but we need
              support from patrons like yourself now more than ever. Below,
              we've listed the best ways to help us through this season.
            </p>
          </div>
        </div>

        <div className={classes.boxesContainer}>
          <div className={classes.boxContainer}>
            <div className={classes.box}>
              <p>01</p>
              <h1>
                Shop <br /> products
              </h1>
              <img src={circle} alt="white circle" />
            </div>
            <p className={classes.boxText}>
              Our full product line is still available online here on our site!
              Getting outside and hiking is still something you can do. Get your
              gear now!
            </p>
          </div>

          <div className={classes.boxContainer}>
            <div className={classes.box}>
              <p>02</p>
              <h1>Donate</h1>
              <img src={triangle} alt="white circle" id={classes.triangle} />
            </div>
            <p className={classes.boxText}>
              Since we've changed the way we operate to online only, and to
              ensure your safety, not all our staff is working. Donate to keep
              them afloat.
            </p>
          </div>

          <div className={classes.boxContainer}>
            <div className={classes.box}>
              <p>03</p>
              <h1>
                Buy <br /> gift cards
              </h1>
              <img src={square} alt="white circle" id={classes.square} />
            </div>

            <p className={classes.boxText}>
              Have all the outdoor gear you need for now? Buy a gift card and
              use it later or share it with friends and family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeS1;
