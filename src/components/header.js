import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "100"};
  line-height: 1;
  margin: 0 2rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  @media (max-width: 666px) {
    margin: 0 1.25rem 0 0;
  }

  &.current-page {
    border-bottom: 2px solid #3ac191;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
const HomeLink = styled(Link)`
  color: #3ac191;
  font-size: 2.5rem;
  font-weight: ${props => props.fontWeight || "black"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 1.5rem calc((100vw - 700px - 0.5rem) / 2);
      margin-top: 4rem;
      flex-direction: column;
      @media (max-width: 666px) {
        width: 90vw;
        padding: 1rem;
      }
    `}
  >
    <HomeLink to="/" fontWeight="bold">
      Josh Cirre
    </HomeLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/projects" activeClassName="current-page">
        Projects
      </NavLink>
      <NavLink to="/podcast" activeClassName="current-page">
        Podcast
      </NavLink>
      <NavLink to="/contact" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
)

export default Header
