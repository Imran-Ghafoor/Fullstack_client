import { useState } from "react";
import { useAuth } from "../store/Auth";

const defaultContactData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactData);
  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactData);
        const data = await response.json();
        console.log(data);
        alert("Message sent");
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us!</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img src="/images/contact1.png" alt="contact" />
          </div>

          <section className="section-form">
            {/* <h1 className="form">Please Fill this Form!</h1> */}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="enter your name"
                  required
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  required
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  cols={"90"}
                  rows={"6"}
                  placeholder="enter your query...!"
                  required
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                />
              </div>
              <br />

              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </section>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211822.207028697!2d65.43536359106598!3d28.042883237953696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909cb80f87fa1%3A0xb76cb42865919b48!2sDolmen%20Mall%20Lahore!5e0!3m2!1sen!2s!4v1740882222319!5m2!1sen!2s"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
