import styled from "styled-components"
import media from "styled-media-query"

export const LogoWrapper = styled.div`
  width: 16.5rem;
  height: 10rem;
  padding: 0;
  ${media.lessThan("large")`
    max-width: 14rem;
    margin-left: 0.5rem;
  `}
`
