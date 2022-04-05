import { Fragment } from 'react';
import classes from './Donate.module.css';

const Donate = () => {
  return (
    <Fragment>
      <section>
        <div className={classes.section1}>
          <div>
            <h1>Here at Acme Outdoors</h1>
            <p className={classes.title}>every dollar counts</p>
            <p className={classes.text}>
              Acme Outdoors is more than just a company, we're a community of
              people who care for one another and for our city. During this
              time, due to shelter in place orders, only a select few of our
              staff are able to work. Any donations you make to Acme will help
              make sure our employees are cared for and can stay safe in these
              uncertain times.
            </p>
          </div>
        </div>

        <div className={classes.section2}>
          <div className={classes.donateContainer}>
            <div>Donate $100</div>
            <div>Donate $50</div>
            <div>Donate $25</div>
            <div>Donate $15</div>
            <div>Donate $5</div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Donate;
