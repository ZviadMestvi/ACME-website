import classes from './ContactS1.module.css';
import chatbox from '../../assets/about/chatbox.svg';
import warning from '../../assets/contact/warning.svg';

const ContactS1 = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.bgImage} />

      <div className={classes.sectionContainer}>
        <h1>Contact Acme Outdoors</h1>
        <div className={classes.boxesContainer}>
          <div>
            <img src={chatbox} alt="chatbox icon" />
            <h2>Contact Us</h2>
            <p>
              Just want to say hi? We'd love to hear from you. We love our
              customers and community!
            </p>
            <button>Send Us A Message</button>
          </div>

          <div>
            <img src={warning} alt="warning icon" />
            <h2>Get Support</h2>
            <p>
              Have an issue with an order or with a product you purchased from
              us? Fill out our support form.
            </p>
            <button>Contact Support</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactS1;
