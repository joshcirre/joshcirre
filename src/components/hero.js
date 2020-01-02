import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  return (
    <div>
      <h1>Josh Cirre Personal Blog &hearts;</h1>
      <p>
        Hello Everyone! <Link to="/about/">Learn about me &rarr;</Link>
      </p>
    </div>
  )
}

export default Hero
