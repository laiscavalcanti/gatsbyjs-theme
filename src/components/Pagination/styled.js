import styled from "styled-components"
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--black);
  display: flex;
  padding: 2rem 2rem 0 2rem;
  font-size: 1rem;
  background-color: var(--background-color);
  justify-content: space-around;
  align-content: flex-end;
  font-family: "Lato", sans-serif;
  &::selection {
    color: var(--white);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
      padding: 0.5rem 0 0 0.5rem;
      margin: 0 0.5rem 1rem 0.5rem;
      font-size: 0.8rem;
  `}
  a {
    color: var(--black);
    transition: color 0.5s;

    &:hover {
      color: var(--backgroundMenuBar);
    }
  }
`
