import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const LayoutNav = styled.nav`
  display: flex;
  align-items: flex-start;
  height: auto;
  color: var(--samecolorWhite);
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;
  `}
`
export const LayoutList = styled.li`
  margin: 0.9rem 0.7rem 0 0.9rem;
  padding-top: 0rem;
  .active {
    color: var(--sameColorWhite);
    opacity: 0.6;
  }
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;
  `}
`
export const LayoutLink = styled(Link)`
  color: var(--sameColorWhite);
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  &:after,
  &:before {
    transition: all 0.5s;
  }
  &:hover {
    color: var(--sameColorWhite);
    box-shadow: yellow;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--sameColorBlack);
    opacity: 0.8;
    height: 2px;
    top: 20px;
  }

  &:hover:after {
    width: 100%;
  }

  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
`
