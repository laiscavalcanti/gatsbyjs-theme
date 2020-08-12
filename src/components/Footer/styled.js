import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 3rem;
  height: 3 .5rem;
  width: 100%;
  background-color: var(--sameColorBlack);
  border-top: solid 1px rgb(0,0,0, 0.3);
  opacity: 0.7;
  ${media.lessThan("large")`
  display: flex;
  justify-content: flex-start;
  height: 5.5rem;
  `}
`
export const MenuBarGroup = styled.div`
  display: flex;
  margin: 0 1.5rem 0 1.5rem;
  background-color: lightblue;
  ${media.lessThan("large")`
    flex-direction: row;
    margin: 0;
  `}
`
export const MenuBarLink = styled(Link)`
  display: block;
`
export const MenuBarItem = styled.span`
  padding: 1.1rem 0.5rem 1.1rem 0.5rem;
  color: var(--backgroundMenuBar);

  &:hover {
    color: var(--backgroundMenuBar);
    transition: opacity 0.3s, transform 0.3s;
  }
  ${media.lessThan("large")`
    padding: 0.5rem;
  `}
`
