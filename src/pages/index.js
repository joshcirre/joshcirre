import React from "react"
import { Link } from "gatsby"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

import usePosts from "../hooks/use-posts"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
