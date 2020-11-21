import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  display: flex;
  justify-content: center;
  max-width: 50rem;
  line-height: 19px;
  margin-left: 3rem;
  background-color: var(--background-color);
  font-family: 'Share Tech Mono';
  ${media.lessThan("large")`
    max-width: 20rem;
    line-height: 1;
    font-size: 0.8rem;
    padding: .5rem .5rem 2rem .5rem;
    margin: 0 1rem 0 1.5rem;
  `}
`
export const RecommendedPrevious= styled.div`
  display: flex;
  flex-direction: column;
  
`
export const RecommendedLink = styled(AniLink)`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 15rem;
  height: 7rem;
  margin: 0 auto;
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
    color: var(--black);
  }
  :hover::after, :hover::before {
    transform: scale(1);
}
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }

  ${media.lessThan("large")`
    max-width: 8rem;
    line-height: 1.3;
    font-size: .8rem;
    padding: 0;
    margin: .5rem 2rem .5rem .5rem;
    padding: .2rem;
    height: 5rem;
  `}

  &.previous {
    
    ${media.lessThan("large")`
      margin-left: 0rem;
  `}
  }
  &.next {
    display: flex;
    justify-content: flex-end;
    
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
