import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "./read-link"
import styled from "@emotion/styled"

const BlogLink = styled(Link)`
  color: #222;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
`

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;
      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <h3>
      <BlogLink to={post.slug}>{post.title}</BlogLink>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>CONTINUE READING &rarr;</ReadLink>
  </article>
)

export default PostPreview
