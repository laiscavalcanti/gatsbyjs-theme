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
position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 17rem;
  height: 7rem;
  padding: 0 20px;
  color: var(--color);
  height: 60px;
  transition: 0.5s;
  padding: 0 20px;
  cursor: pointer;
  border: 2px solid var(--color);
  -webkit-transition:0.5s;
  :before, :after {
  width: 100%;
  height:100%;
  z-index: 3;
  content:'';
  position: absolute;
  top:0;
  left:0;
  box-sizing: border-box;
  transform: scale(0);
  transition: 0.5s;
}
  &::before{
    border-bottom: 3px solid var(--black);
    border-left: 0;
    transform-origin: 0% 100%;
  }
  &:hover{
    border: none;
  transform-origin: 50% 50%;
  }
  :hover::after, :hover::before {
  transform: scale(1);
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
