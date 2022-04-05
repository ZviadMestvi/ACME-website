import { Link } from 'react-router-dom';
import classes from './AboutS3.module.css';

const AboutS3 = () => {
  return (
    <section>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionContent}>
          <h1>Need Help?</h1>
          <p>
            Need help or assistance? Our team is standing by to make sure you
            get the help you need. Whether you need to adjust an order or
            delivery details, we're ready to help!
          </p>
          <Link to="/contact">
            <button>Contact Support</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutS3;
