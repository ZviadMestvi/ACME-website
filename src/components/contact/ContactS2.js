import classes from './ContactS2.module.css';

const ContactS2 = () => {
  return (
    <section>
      <div className={classes.sectionContainer}>
        <div className={classes.contactUsContainer}>
          <h2>Contact Us</h2>
          <p>
            Acme Outdoors <br /> 123 Rainy Street <br /> Oklahoma City, OK 73129
          </p>
          <p className={classes.phoneNumbers}>
            <b>General Inquiries:</b> (405) 555-5555 <br />
            <b>Customer Support:</b> (405) 555-5556
          </p>
        </div>

        <div className={classes.formContainer}>
          <h2>Contact Form</h2>
          <p>Send us a message and we'll get back to you as soon as we can!</p>
          <form autoComplete="off">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={classes.name}
              placeholder="Enter your name"
              maxLength="256"
            />
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className={classes.email}
              placeholder="Enter your email address"
              maxLength="256"
            />
            <label>Your Message</label>
            <textarea
              name="message"
              id="message"
              className={classes.message}
              placeholder="Enter your message"
              maxLength="5000"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactS2;
