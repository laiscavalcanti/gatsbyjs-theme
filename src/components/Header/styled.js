import styled from "styled-components"
import media from "styled-media-query"
import {breakpoints} from '../../styles/breakpoints'
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from "gatsby"

export const HeaderDiv = styled.nav`
box-sizing: border-box;
padding: ${props => props.shrink ? "0.5rem" : "0.7rem 0"};
transition: padding 0.2s ease-in;
display: flex;
position: fixed;
width: 100%;
height: ${props => props.shrink ? "6.5rem" : "8.5rem"};
justify-content: center;
z-index: 1;
background-color: #FFFFFF;
${media.lessThan("large")`
   height: 5rem;
   margin: 0;
   padding: 0;
   top: 0;
   right: 0;
   left: 0;
  `}
`
export const Nav = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  
  ${media.lessThan("large")`
  margin: 0.5rem 0;
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
  padding-top: 30%;
  background-color: black;
  a {
    margin: -1rem 2rem 5rem 2rem;
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
  color: red;
  margin-left: 2rem;
`}
`
/*export const NavLink = styled(Link)`
text-decoration: none;
color: ${props => props.theme.secondary};
font-family: Mulish;
text-transform: uppercase;
font-size: 0.9rem;
font-weight: bold;
letter-spacing: 3px;
margin: 0 3rem;
transition: color ${props => props.theme.transition1};
&:hover {
  color: ${props => props.theme.highlight};
}
${breakpoints.vp7} {
  margin: 0 1.5rem;
  background-color: blue;

}
`*/
export const LogoStyled = styled(Link)`
box-sizing: border-box;
margin-right: 5rem;
transition: ease-in linear 0.2s;
height:${props => props.shrink ? "9rem" : "13.5rem"};
width: ${props => props.shrink ? "9rem" : "13.5rem"};
margin-top: ${props => props.shrink ? "0.5rem" : "0rem"};
${media.lessThan("large")`
  width: ${props => props.shrink ? "5rem" : "6rem"};
  margin: 1rem 5rem 0 2rem;
`}

`
export const WrapperButtonTheme = styled.section`
  display: flex;
  margin-left: -1.5rem;
  margin-bottom: -1rem;
  ${media.lessThan("large")`
    margin-left: -7.5rem;
    margin-top: -2rem;
  `}
  `

/*export const SideBarWrapper = styled.header`
  .header{
    display: flex;
    justify-content: space-between; 
    }
  .smaller{
    background-color: blue;
  }
 
  ${media.lessThan("large")`
   height: 5rem;
   margin: 0;
   padding: 0;
   top: 0;
   right: 0;
   left: 0;
  `}
`
export const Toggle = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0 8vw;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    z-index: 1;
  }
`
export const NavBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    z-index: 1;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: white;
    transition: all 0.3s ease-in;
    top: 10.3vh;
    padding-top: 10vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

export const Hamburger = styled.div`
  background-color: red;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  border-radius: 2px;
  margin-left: 3rem;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  z-index: 1;
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background-color: red;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props => (props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)")};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  height: 8.5rem;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`
export const LogoItem = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  ${media.lessThan("large")`
  margin-top: 0.5rem;
   display: flex;
   width: 60%;
   flex-direction: column;
   margin: 0.7rem 0rem 0 0;
  `}
`
export const WrapperButtonTheme = styled.section`
  display: flex;
  margin-left: -1.5rem;
  margin-bottom: -1rem;
  ${media.lessThan("large")`
    margin-left: -7.5rem;
    margin-top: -2rem;
  `}
`*/