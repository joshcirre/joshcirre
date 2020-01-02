import React from "react"
import { Link } from "gatsby"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      I'm{" "}
      <a href="http://cir.re/twitter" target="_blank">
        @joshcirre
      </a>
      , a developer, teacher, and current Lambda School student with a passion
      for creativity, design, and problem-solving.
    </p>
    <p>
      I'm also a worship leader and founder of WorshipDev with a heart for
      training others to develop better technical and creative web skills in a
      church setting.
    </p>
  </Layout>
)

export default IndexPage
