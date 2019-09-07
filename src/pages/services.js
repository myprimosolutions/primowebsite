import React from "react"
import styles from "../styles/styles.module.scss"
import Layout from "../components/layout"
import AOS from "aos"
import "aos/dist/aos.css"
import laptop from "../../static/img/laptop.png"
import seo from "../../static/img/seo.png"
import contentful from "../../static/img/contentful.png"
import wallet from "../../static/img/wallet.png"

class Services extends React.Component {
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
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
        >
          <h1>Why choose our service?</h1>
          <p>
            We expert in developing fast and effective websites for all
            businesses, and we believe a good website should not have a big cost
            to businesses. Our aim is to deliver good quality website with less
            cost and above all, we give our client the flexibility to maintain
            their own website content.
          </p>
        </div>
        <div className={styles.contentLayout}>
          <img
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-once="true"
            src={laptop}
            alt="website"
          />
          <div
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="150"
            data-aos-once="true"
          >
            <p>Blazing fast website built with React and Gatsby</p>
            <p>
              Responsive website that works on all desktops, tablets, and mobile
              phones
            </p>
            <p>Great security that protects your website from all harm</p>
          </div>
        </div>
        <div className={styles.contentLayout}>
          <div
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="150"
            data-aos-once="true"
          >
            <p>Keyword optimized to attract searchers and engines</p>
            <p>
              Great user experience including a fast load speed and compelling
              UX
            </p>
            <p>High reachability to drive traffics into website</p>
          </div>
          <img
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="150"
            data-aos-once="true"
            src={seo}
            alt="seo"
          />
        </div>
        <div className={styles.contentLayout}>
          <img
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-once="true"
            src={contentful}
            alt="contentful"
          />
          <div
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="150"
            data-aos-once="true"
          >
            <p>
              Incorporate Contentful as back-end data for faster and secured
              data storage
            </p>
            <p>Highly self-manageable website content</p>
            <p>Easy to use tools for anytime alteration</p>
          </div>
        </div>
        <div className={styles.contentLayout}>
          <div
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="150"
            data-aos-once="true"
          >
            <p>High quality websites that cost less</p>
            <p>Saves your own time configuring your website</p>
            <p>Greatly reduce your budget invested in website for long-term</p>
          </div>
          <img
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-offset="150"
            data-aos-once="true"
            src={wallet}
            alt="wallet"
          />
        </div>
      </Layout>
    )
  }
}

export default Services
