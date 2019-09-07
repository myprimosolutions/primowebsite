<<<<<<< HEAD
import React from "react"
import config from "../../data/SiteConfig"
import styles from "../styles/styles.module.scss"
import Email from "./email"
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
        <Email />
      </div>
    </footer>
  )
}

export default Footer
=======
import React from "react"
import config from "../../data/SiteConfig"
import styles from "../styles/styles.module.scss"
import Email from "./email"
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
        <Email />
      </div>
    </footer>
  )
}

export default Footer
>>>>>>> 30df615767adaef0d9586833df76ac3a9cd25511
