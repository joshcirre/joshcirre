import { useStaticQuery, graphql } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query GetPosts {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            author
            slug
            title
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }))
}

export default usePosts
