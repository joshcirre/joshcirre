import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Podcast = () => (
  <Layout>
    <SEO title="Podcast" />
    <p>
      I'm currently in the process of publishing the first set of episodes for
      the WorshipDev podcast. Sign up for updates{" "}
      <a href="https://worship.dev/#podcast">here.</a>
    </p>
  </Layout>
)

export default Podcast
