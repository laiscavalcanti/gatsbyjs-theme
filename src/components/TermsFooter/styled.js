import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WrapperLinksTerms = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 1rem;
`

export const CopyRight = styled.p `
    font-size: 0.9rem;
    color: var(--black);
    opacity: 0.8;
    letter-spacing: 1px;
    margin-right: 0.5rem;
`

export const LinkTerm = styled(AniLink)`
    font-size: 0.9rem;
    color: var(--black);
    opacity: 0.8;
    letter-spacing: 1px;
    margin-left: 0.5rem;
` 
export const DevelopBy = styled(AniLink)`
    margin-left: 10rem;
    text-decoration: none;
`
export const Contact = styled.p`
    display: flex;
    
`