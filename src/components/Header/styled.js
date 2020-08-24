
import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SideBarWrapper = styled.header`
  .header{
  display: flex;
  justify-content: space-around  }

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
  justify-content: center;
  align-items: start;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  height: 8rem;
  
  background-color: white;

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
`