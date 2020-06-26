import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SideBarWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 9rem;
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
  margin-top: 1rem;
  ${media.lessThan("large")`
   display: flex;
   width: 60%;
   flex-direction: column;
   margin: 0.7rem 0rem 0 0;
  `}
`
