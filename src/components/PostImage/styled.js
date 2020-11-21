import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PostImage = styled(Img)`
  display: block;
  width: 50%;
  height: 22rem;
  margin-top: 4rem;
  margin-left: 8.5rem;
  ${media.lessThan("large")`
    display: flex;
    width: 100%;
    height: 22rem;
    margin: 0;
`}
`
