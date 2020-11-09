import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 27.5rem 0 5rem;
  line-height: 19px;
  background-color: var(--background-color);
  ${media.lessThan("large")`
    line-height: 1;
    font-size: 0.8rem;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
  `}
`
export const RecommendedLink = styled(AniLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 17rem;
  height: 7rem;
  border: solid 1px var(--sameColorWhite);
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.5s;
  font-size: 1rem;
  letter-spacing: 0.5px;
  background: var(--background-color);
  color: var(--black);
  &:hover{
    border: solid 1px red;
    background-color: purple;
    transition: 0.5s ease-in-out;
  }
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }

  ${media.lessThan("large")`
  widht: 100%;
    line-height: 1.3;
    font-size: 0.8rem;
    padding: 0;
    margin-left: 1rem;
  `}

  &.previous {
    margin-left: 3rem;
    ${media.lessThan("large")`
      margin-left: 0rem;
  `}
  }
  &.next {
    justify-content: flex-end;
    margin-right: 3rem;

    ${media.lessThan("large")`
      margin-right: 0rem;
  `}
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
