import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <p
        css={css`
          font-size: 0.85rem;
          margin-top: 8rem;
        `}
      >
        Bear with me as I put more content together.
      </p>
    </Layout>
  )
}

export default Blog
