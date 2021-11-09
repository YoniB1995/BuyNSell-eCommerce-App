import React, { useState } from "react";
import "./ContactUs.css";
import { sendContactUs, addContactUsToDB } from "../../service/user-service";
const ContactUs = () => {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const submitDetails = async () => {
    const details = {
      email: email,
      subject: subject,
      text: text,
    };
    await sendContactUs(details).then(() => {
      setSent(true);
    });

    await addContactUsToDB(details);
  };
  return (
    <div class="body-form">
      <div class="wrapper">
        <h2>CONTACT US</h2>
        {!sent ? (
          <form action="" method="POST" onSubmit={submitDetails}>
            <div class="form-group">
              <label for="name">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="email">Subject</label>
              <input
                type="text"
                name="subject"
                id="email"
                placeholder="Your Subject"
                required
                minlength="3"
                maxlength="25"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                name="text"
                id="text"
                rows="5"
                placeholder="Type your Text here...."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="submit">
                <i class="far fa-paper-plane"></i>Send
              </button>
            </div>
          </form>
        ) : (
          <h2>Email Sent!</h2>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
