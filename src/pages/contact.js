import React from "react";
import styles from "../styles/styles.module.scss";
import Layout from "../components/layout";
import Email from "../components/email";
import { MdMailOutline, MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      <div
        className={styles.pageHeader}
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
      >
        <h1>Contact us</h1>
        <br />
        <br />
        <p>
          via email <MdMailOutline />
        </p>
        <br />
        <Email />
        <br />
        <br />
        <p>
          or{" "}
          <a href="tel:+60179603926">
            give us a call <MdPhoneInTalk />
          </a>
        </p>
        <br />
      </div>
    </Layout>
  );
};

export default Contact;
