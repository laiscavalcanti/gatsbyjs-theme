import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  height: 3.5rem;
  width: 100%;
  background-color: var(--background-color);
  ${media.lessThan("large")`
  display: flex;
  flex-direction: column;
  height: 7.5rem;
  `}
`
