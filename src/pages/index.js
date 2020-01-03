import React from "react"
import { Link } from "gatsby"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

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
    <p>
      I write about what I'm learning, have a few side projects, and host a
      podcast.
    </p>
    <Newsletter />
  </Layout>
)

export default IndexPage
