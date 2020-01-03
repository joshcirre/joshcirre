import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const EmailInput = styled("input")`
  width: 40%;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  box-sizing: border-box;
`

const SummaryText = styled("p")`
  font-size: 0.75rem;
  font-weight: lighter;
`

const SubscribeButton = styled("input")`
  background: #222;
  color: #fff;
  border: 0 none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  transition: 0.1s;
  &:hover {
    background: #3ac191;
    transition: 0.1s;
  }
`

const Newsletter = () => (
  <form
    css={css`
      margin-top: 8rem;
      border-top: 0.1rem #c4c4c4 solid;
      padding-top: 2rem;
    `}
    action="https://tinyletter.com/joshcirre"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/joshcirre', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
  >
    <p>
      <label for="tlemail">
        <h3>Join my mailing list: Tips, Text, and Theology</h3>
        <SummaryText>
          Just a collection of ramblings from my head to your inboxes on the
          topics of design, marketing, webdev, church leadership, and more.{" "}
          <Link to="/contact">Reach out to me</Link> if you are looking for
          thoughts on something specific and I'd be glad to write about it!
        </SummaryText>
      </label>
    </p>
    <div
      css={css`
        display: flex;
      `}
    >
      <EmailInput type="text" name="email" id="tlemail" />

      <input type="hidden" value="1" name="embed" />
      <SubscribeButton type="submit" value="Subscribe" />
    </div>
  </form>
)

export default Newsletter
