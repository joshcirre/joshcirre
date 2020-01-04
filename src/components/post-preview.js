import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "./read-link"
import styled from "@emotion/styled"

const BlogLink = styled(Link)`
  color: #555;
  font-size: 1.5rem;
  line-height: 1.5;
  text-decoration: none;
`

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 2rem;
      padding-bottom: 1rem;
      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <BlogLink to={post.slug}>{post.title}</BlogLink>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>CONTINUE READING &rarr;</ReadLink>
  </article>
)

export default PostPreview
