import classes from './HomeS3.module.css';

const HomeS3 = () => {
  return (
    <section>
      <div className={classes.sectionContainer}>
        <div className={classes.image} />
        <div className={classes.textContainer}>
          <div className={classes.text}>
            <h2>Shop local.</h2>
            <p>
              We know that during COVID-19, a lot of folks around the city and
              state are feeling uneasy about the future - we're not sure what
              the future holds either.
            </p>
            <p>
              That said: we know that we love making sure you have the gear you
              need for your adventures, and we're going to keep doing that -
              with our team - until the city tells us we can't.
            </p>
            <p>
              But as long as folks like yourself support small businesses around
              the city, then we'll be here — every day, making sure your orders
              arrive on time.
            </p>
            <p>-------</p>
            <p>
              Jane & John Doe <br /> <b>Acme Outdoors</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeS3;
