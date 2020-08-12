import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 1;
  ${media.lessThan("large")`
      flex-direction: column;
  `}
`
export const LayoutMain = styled.main`
  background-color: var(--background-color);
  min-height: 100vh;
  padding: 4rem 0 5rem 0;
  transition: 0.5s;
  width: 100%;
  z-index: 1;
  ${media.lessThan("large")`
    padding: 3rem 0 2rem 0;
  `}
`
