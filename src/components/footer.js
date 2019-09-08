import React from "react"
import config from "../../data/SiteConfig"
import styles from "../styles/styles.module.scss"
import { IoLogoFacebook } from "react-icons/io"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>
          Find us in our{" "}
          <a href="https://www.facebook.com/" target="_blank">
            <IoLogoFacebook />
            acebook
          </a>{" "}
          page
        </p>
        <p>
          Built with{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank">
            Gatsby{" "}
            <img
              src="https://api.iconify.design/simple-icons:gatsby.svg?color=%23999999"
              alt="Gatsby"
            />
          </a>
        </p>
        <p>Designed, Created and Owned by {config.copyright}</p>
      </div>
      <div className={styles.vline}></div>
      <div className={styles.right}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={styles.footerEmail}
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
      </div>
    </footer>
  )
}

export default Footer
