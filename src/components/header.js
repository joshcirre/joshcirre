import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #3ac191;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 600px - 0.5rem) / 2);
      margin-top: 20vh;
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Josh Cirre
    </NavLink>
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
