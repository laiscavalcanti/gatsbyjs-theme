import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperLinksTerms = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 1rem;
  font-size: 0.9rem;
  font-family: "Share Tech Mono", monospace;
  opacity: 0.8;
  ${media.lessThan("large")`
      display: flex;
      flex-direction: column;
      margin-left: 2rem;
      font-size: 0.8rem;
  `}
`
export const CopyRight = styled.p`
  font-size: 0.9rem;
  color: var(--black);
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    color: var(--colorHover);
  }
  &::selection {
    color: var(--white);
    background: var(--backgroundSelection);
  }
`
export const LinkTerm = styled(AniLink)`
  font-size: 0.9rem;
  color: var(--black);
  letter-spacing: 1px;
  cursor: pointer;
  &::selection {
    color: var(--white);
    background: var(--backgroundSelection);
    opacity: 0.7;
  }
  &:hover {
    color: var(--colorHover);
  }
`
export const DevelopBy = styled(AniLink)`
  display: flex;
  text-decoration: none;
  color: var(--black);
  letter-spacing: 1px;
  cursor: pointer;
  &::selection {
    color: var(--white);
    background: var(--backgroundSelection);
    opacity: 0.7;
  }
  &:hover {
    color: var(--colorHover);
  }
`
export const Contact = styled.p`
  display: flex;
  color: var(--black);
  letter-spacing: 1px;
  cursor: pointer;
  &::selection {
    color: var(--white);
    background: var(--backgroundSelection);
    opacity: 0.7;
  }
  &:hover {
    color: var(--colorHover);
  }
`
