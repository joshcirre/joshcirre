import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>I'm pretty easy to get a hold of.</h1>
    <br />
    <p>
      The easiest way to reach me is on{" "}
      <a href="http://cir.re/twitter">Twitter</a>. If that's not your thing,
      feel free to <a href="mailto: joshcirre@gmail.com">email me</a>. I try to
      get back to everyone as quickly as possible.
    </p>
  </Layout>
)

export default Contact
