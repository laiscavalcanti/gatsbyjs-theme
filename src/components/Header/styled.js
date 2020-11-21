import styled from "styled-components"
import media from "styled-media-query"
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from "gatsby"

export const HeaderDiv = styled.nav`
padding: ${props => props.shrink ? ".5rem" : ".7rem 0"};
transition: padding 0.5s ease-in-out;
display: flex;
position: fixed;
width: 100%;
height: ${props => props.shrink ? "6.5rem" : "8.5rem"};
justify-content: flex-start;
z-index: 1;
background-color: var(--sameColorWhite);
${media.lessThan("large")`
    height: 4.5rem;
    padding: 0;
   justify-content: space-around;
  `}
`
export const Nav = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  margin-left: 5rem;
  ${media.lessThan("large")`
  margin-left: 0;
`}
${media.lessThan("large")` {
  display: none;
  margin: 0;
`}
&.active {
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 17%;
  padding-left: 25%;
  background-color: var(--colorHover);
  a {
    margin: -1rem 2rem 3rem 2rem;
    ${media.lessThan("large")`
    margin-left: 0.5rem;
    margin-top: 0rem;
  `}
  }
}
`
export const Menu = styled(HamburgerMenu)`
margin-top: 1.75rem;
visibility: hidden;
cursor: pointer;
z-index: 3;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: start;
width: 100%;
position: fixed;
height: 8.5rem;
  ${media.lessThan("large")`
  display: inline-block;
  visibility: visible;
  color: blue;
  margin-left: 2rem;
`}
`

export const LogoStyled = styled(Link)`
box-sizing: border-box;
margin-left: 10rem;
transition: ease-in-out 0.5s;
height:${props => props.shrink ? "9rem" : "13.5rem"};
width: ${props => props.shrink ? "9rem" : "13.5rem"};
margin-top: ${props => props.shrink ? "0.5rem" : "0rem"};
${media.lessThan("large")`
  width: ${props => props.shrink ? "6rem" : "6rem"};
  margin: 1rem 0rem 0 2rem;
`}

`
export const WrapperButtonTheme = styled.section`
  display: flex;
  margin-left: -1rem;
  margin-bottom: -1rem;
  ${media.lessThan("large")`
    margin-left: 0;
    
  `}
  `
