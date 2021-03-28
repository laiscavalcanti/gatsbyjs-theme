import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const notFoundWrapper =  styled.section `
    display: flex;
    justify-content: space-around;
    width: 75%;
    margin: 5rem 5rem 0 5rem;
    ${media.lessThan("large")`
    width: 100%;
    flex-direction: column;
    margin: .5rem .5rem 0 .5rem;
`}
`
export const paragraphNotFound = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 40rem;
  margin-top: 10rem;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  ${media.lessThan("large")`
    width: 75%;
    margin-top: 4rem;
`}
`
export const textNotFound = styled.p`
  color: var(--color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 600; 
`

export const buttonNotFound = styled(AniLink)`
    border: 1px solid var(--colorHover);
    border-radius: 5px;
    height: 3rem;
    width: 15rem;
    text-align: center;
    background-color: var(--colorHover);
    cursor: pointer;
`
export const textNotFoundButton = styled.p `
  color: var(--black);
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 400; 
  margin-top: 1rem;
`

export const gifWrapper = styled.div`
    width: 50%;
    height: 25rem;
    ${media.lessThan("large")`
    width: 100%;
    height: 10rem;
    margin-top: 4rem;
`}
`