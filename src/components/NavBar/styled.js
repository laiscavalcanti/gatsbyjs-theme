import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const LayoutNav = styled.nav`
  display: flex;
  align-items: start;
  height: auto;
  color: var(--sameColorBlack);
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;
   color: var(--sameColorWhite);
  `}
`
export const LayoutList = styled.li`
   position:relative;
  margin: 0.9rem 0.7rem 0 0.9rem;
  padding-top: 0rem;
  .active {
    opacity: 0.6;
  }
  ${media.lessThan("large")`
   display: flex;
   flex-direction: column;
   margin: 0
  `}
`
export const LayoutLink = styled(AniLink)`
color: var(--sameColorBlack);
  text-decoration:none;
      display:block;
      padding:5px 0;
      letter-spacing: 0.05rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Share Tech Mono', monospace;
      line-height:1;
      position:relative;
      z-index:1;
      text-align: center;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
          to right,
          #b6071d,
          #be1622 50%,
          var(--sameColorBlack) 50%);
      background-size: 200% 100%;
      background-position: -100%;
      transition: all 0.3s ease-in-out;
  
      &:before{
        display:block;
        content:'';
        width:0;
        height:2px;
        bottom:5px;
        left:0;
        bottom:-1px;
        z-index:0;
        position:absolute;
        background: #be1622;
        transition: all 0.3s ease-in-out;
      }
      &:hover{
        background-position: 0%;
        &:before{
          width:100%;
        }
      }
  
    
`
