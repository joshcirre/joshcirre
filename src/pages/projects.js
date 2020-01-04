import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>A Few Things I'm Putting Together</h1>
    <p>
      I'd like to think I have a few things on the backburner that I'll
      eventually build and release. In the meantime, this is a good list of what
      holds my time and attention.
    </p>
    <br />
    <ul>
      <li>
        <a href="https://worship.dev/">WorshipDev</a>
      </li>
      <li>
        <a href="https://twitter.com/joshcirre/status/1204236173591400448?s=20">
          SendTasks
        </a>
      </li>
      <li>
        <i>DbacksWin - Coming Soon</i>
      </li>
    </ul>
    <Newsletter />
  </Layout>
)

export default Projects
