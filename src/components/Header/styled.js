import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SideBarWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 8.5rem;
  position: fixed;
  .header .smaller {
    display: flex;
    justify-content: space-around;
    position: fixed;
    height: 5rem;
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
export const LogoItem = styled(Link)`
  display: flex;
  margin-top: 0.5rem;
  ${media.lessThan("large")`
   display: flex;
   width: 60%;
   flex-direction: column;
   margin: 0.7rem 0rem 0 0;
  `}
`
