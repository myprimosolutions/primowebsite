import React from "react";
import styles from "../styles/styles.module.scss";

const Email = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <table>
        <tr>
          <td>
            <label>Name:</label>
          </td>
          <td>
            <input
              name="name"
              placeholder="Your name"
              type="text"
              required="required"
            />
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <label>Email:</label>
          </td>
          <td>
            <input
              name="email"
              placeholder="Your email"
              type="email"
              required="required"
            />
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <label>Message:</label>
          </td>
          <td>
            <textarea
              name="message"
              placeholder="Tell us what you have in mind"
              type="text"
              required="required"
              required="required"
            />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <button>Send</button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Email;
