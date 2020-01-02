import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"

const Blog = () => {
  const posts = usePosts()

  return (
    <Layout>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default Blog
