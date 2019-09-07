import React from "react"
import styles from "../styles/styles.module.scss"
import Layout from "../components/layout"
import laptop from "../../static/img/laptop.png"
import { MdChevronRight } from "react-icons/md"

const About = () => {
  return (
    <Layout>
      <div
        className={styles.pageHeader}
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
      >
        <h1>About Primo Solutions</h1>
        <p>
          Primo Solutions is a tech company that focuses on helping businesses
          to create their own business website. We cover everything when it
          comes to developing a website from zero to a fully running website.
        </p>
      </div>
      <div className={styles.contentLayoutSC}>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
          data-aos-offset="150"
          data-aos-once="true"
        >
          <p>
            <MdChevronRight /> Our Purpose
          </p>
          <p>
            Provide a great service in developing an effective and responsive
            website for our customers by using latest web technology.
          </p>
        </div>
      </div>
      <div className={styles.contentLayoutSC}>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
          data-aos-offset="150"
          data-aos-once="true"
        >
          <p>
            <MdChevronRight /> Our Vision
          </p>
          <p>
            To make our company renowned for creating quality websites that cost
            less and drives high volume traffic to our customer's businesses.
          </p>
        </div>
      </div>
      <div className={styles.contentLayoutSC}>
        <div
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
          data-aos-offset="150"
          data-aos-once="true"
        >
          <p>
            <MdChevronRight /> Our Mission
          </p>
          <p>
            Always put customers' needs ahead of ours and to give best advise
            prior to customer requirements.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
