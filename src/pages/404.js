import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Oops...there is no content in this URL</h1>
      <br />
      <br />
      <h2>
        Go back to our homepage <Link to="/">here</Link>
      </h2>
    </Layout>
  )
}

export default NotFound
