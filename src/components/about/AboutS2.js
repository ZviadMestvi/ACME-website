import profile1 from '../../assets/about/profile1.png';
import profile2 from '../../assets/about/profile2.png';
import classes from './AboutS2.module.css';

const AboutS2 = () => {
  return (
    <section>
      <div className={classes.sectionContainer}>
        <div className={classes.image} />
        <div className={classes.textBox}>
          <div className={classes.textContainer}>
            <h2>Meet the Owners</h2>
            <p>
              John and Jane met on a backpacking adventure in Nepal. John, a
              former sheep shearer, went on the trip to get some clarity about
              his next adventures in life. Jane — a Peloton instructor — went on
              the trip to explore the landscape in Nepal.
              <br />
              <br />
              While on the trip, John and Jane realized that they had one common
              love — the love for hiking and the love for being outdoors.
              <br />
              <br />
              Returning back to their home state of Oklahoma, John and Jane
              hatched a plan to launch a retail store centered around their
              passions.
              <br />
              <br />
              While John handled the sourcing of goods and customer service,
              Jane focused on the web + e-commerce side of the business,
              building this website in the best design platform on the web —
              Webflow!
              <br />
              <br />
              In 1989, John and Jane Doe officially launched Acme Outdoors, the
              premiere store for outdoor enthusiasts around the state.
              <br />
              <br />
              To this day, John and Jane return to Nepal yearly to ensure that
              they never forget their roots and where they came from.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.reviewsContainer}>
        <div>
          <img src={profile1} alt="Co-Owner John Doe" />
          <h3>John Doe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div>
          <img src={profile2} alt="Co-Owner Jane Doe" />
          <h3>Jane Doe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutS2;
