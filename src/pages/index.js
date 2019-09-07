<<<<<<< HEAD
import React from "react"
import { Link } from "gatsby"
import styles from "../styles/styles.module.scss"
import Layout from "../components/layout"
import AOS from "aos"
import "aos/dist/aos.css"
import "font-abel/scss/abel.scss"

class Index extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    })
  }
  render() {
    return (
      <Layout>
        <div
          className={styles.pageHeader}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
        >
          <h1>We develop business website</h1>
          <p>
            We have all the different package for everyone, including buying
            domain names, design, develop, setting up email for your domain
            name, construct SEO on your website, and maintain your website. Give
            us a <Link to="/contact">call or email</Link> us to find out the
            perfect package for your business website.
          </p>
        </div>
        <div
          className={styles.contentHeaderDIV}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-once="true"
        >
          <h1>Website FAQ</h1>
        </div>
        <div
          className={styles.contentDIV}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-once="true"
        >
          <h2>Why need website when we can easily create a Facebook page?</h2>
          <p>
            Nowadays website is a very popular tool for every business, everyday
            people search for your business on internet after they contacted
            you. Even if you do most of your business in-person, customers are
            now used to doing research online before they make a purchase. If
            you don’t have a website, you’re sending a message that your
            business isn’t up to modern, professional standards. A website is
            cheaper than traditional advertising, easy to keep up to date, and
            less time-consuming than keeping track of multiple social media
            accounts.
          </p>
        </div>
        <div
          className={styles.contentDIV}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-once="true"
        >
          <h2>
            There are tons of website that we can create a free website, why we
            need a website developer like you?
          </h2>
          <p>
            No doubt, there are lots of website out there that you can use to
            create your own free website. But is it really free? Most of the
            better and advanced features like better SEO, removing ads from the
            free website template, VIP support, create your own domain name, and
            etc requires a premium plan. And the premium plan means that you
            have to pay a subscription fee monthly, which would cost you more
            than hiring a website developer to do it for you in long term.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Index
=======
import React from "react"
import { Link } from "gatsby"
import styles from "../styles/styles.module.scss"
import Layout from "../components/layout"
import AOS from "aos"
import "aos/dist/aos.css"
import "font-abel/scss/abel.scss"

class Index extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    })
  }
  render() {
    return (
      <Layout>
        <div
          className={styles.pageHeader}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
        >
          <h1>We develop business website</h1>
          <p>
            We have all the different package for everyone, including buying
            domain names, design, develop, setting up email for your domain
            name, construct SEO on your website, and maintain your website. Give
            us a <Link to="/contact">call or email</Link> us to find out the
            perfect package for your business website.
          </p>
        </div>
        <div
          className={styles.contentHeaderDIV}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-once="true"
        >
          <h1>Website FAQ</h1>
        </div>
        <div
          className={styles.contentDIV}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-once="true"
        >
          <h2>Why need website when we can easily create a Facebook page?</h2>
          <p>
            Nowadays website is a very popular tool for every business, everyday
            people search for your business on internet after they contacted
            you. Even if you do most of your business in-person, customers are
            now used to doing research online before they make a purchase. If
            you don’t have a website, you’re sending a message that your
            business isn’t up to modern, professional standards. A website is
            cheaper than traditional advertising, easy to keep up to date, and
            less time-consuming than keeping track of multiple social media
            accounts.
          </p>
        </div>
        <div
          className={styles.contentDIV}
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
          data-aos-once="true"
        >
          <h2>
            There are tons of website that we can create a free website, why we
            need a website developer like you?
          </h2>
          <p>
            No doubt, there are lots of website out there that you can use to
            create your own free website. But is it really free? Most of the
            better and advanced features like better SEO, removing ads from the
            free website template, VIP support, create your own domain name, and
            etc requires a premium plan. And the premium plan means that you
            have to pay a subscription fee monthly, which would cost you more
            than hiring a website developer to do it for you in long term.
          </p>
        </div>
      </Layout>
    )
  }
}

export default Index
>>>>>>> 30df615767adaef0d9586833df76ac3a9cd25511
