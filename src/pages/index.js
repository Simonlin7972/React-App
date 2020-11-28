import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Welcome to your new Gatsby site. Simon's first site</p>
      <Link to="/page-2/">Watch the video</Link> <br />
      </div>
    </div>
   
  </Layout>
)

export default IndexPage
