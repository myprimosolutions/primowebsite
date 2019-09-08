import React from "react"
import styles from "../styles/styles.module.scss"

const Email = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.email}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label>Name:</label>
      <input
        name="name"
        placeholder="Your name"
        type="text"
        required="required"
      />
      <br />
      <label>Email:</label>
      <input
        name="email"
        placeholder="Your email"
        type="email"
        required="required"
      />
      <br />
      <label>Message:</label>
      <textarea
        name="message"
        placeholder="Tell us what you have in mind"
        type="text"
        required="required"
        required="required"
      />
      <br />
      <button>Send</button>
    </form>
  )
}

export default Email
