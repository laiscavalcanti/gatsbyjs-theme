import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

export const CarouselWrapper = styled.section`
  display: flex;
  width: 100%;
  margin-top: 5rem;
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
`}
  .swiper-container {
    font-size: 18px;
    text-align: center;
    width: 100%;
    z-index: 0;
  }

  .slideshow {
    text-align: left;
    width: 100%;
    height: 100%;
    color: black;
    padding: 0;

    .swiper-button-next,
    .swiper-button-prev {
      color: #be1622;

      cursor: pointer;
      ${media.lessThan("large")`
        width: 20px;
        height: 20px;
        top: 30%;
`}
    }

    .swiper-pagination {
      position: relative;
      margin-top: 2rem;
      bottom: 0px;

      .swiper-pagination-bullet {
        position: relative;
        background: transparent !important;
        width: auto;
        opacity: 0.5;
        &:focus {
          outline: none;
        }
        &:before {
          cursor: pointer;
          margin: 0px 8px 0px 0;
          display: inline-block;
          width: 20px;
          font-size: 20px;
          color: var(--black);
        }

        &:first-child:before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(2):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(3):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(4):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(5):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(6):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(7):before {
          content: "◼";
          color: #be1622;
        }
      }
      .swiper-pagination-bullet-active {
        margin: 20px 30px 0 0;
        position: relative;
        opacity: 1;

        &:after {
          content: "";
          width: 30px;
          position: absolute;
          left: 25px;
          top: 40px;
        }
        &:last-child {
          margin: 50px 8px 0 0;
          &:after {
            display: none;
          }
        }
      }
    }
  }
`
export const CarouselLink = styled(AniLink)`
  color: var(--black);
  height: 30rem;
  padding: 0.5rem 0rem 3rem 0rem;
`
export const CarouselImage = styled(Img)`
  position: relative;
  display: flex;
  width: 100%;
  height: 30rem;
  ${media.lessThan("large")`
  position: realtive;
    display: flex;
    width: 100%;
    height: 22rem;
`}
`
export const CarouselInfo = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 3rem 1rem 0 1rem;
  width: 40%;
  left: 20px;
  bottom: 20px;
  font-family: "Oswald", sans-serif;

  ${media.lessThan("large")`
  position: absolute;
    display: flex;
    width: 100%;
    margin: 1.5rem 0.5rem 0 0.5rem;
    padding: 0 3rem 0 1.5rem;
`}
  &:hover {
    color: var(--backgroundSelection);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const CarouselDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 1rem 0 0 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  opacity: 0.7;
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
`}
`
export const CarouselTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 2.5rem 1rem 0rem 1rem;
  text-align: center;
  font-family: "Oswald", serif;
  line-height: 1.3;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 50px;
  background-color: #be1622;
  color: #ffffff;
  ${media.lessThan("large")`
    width: 100%;
    margin: 1rem 0.5rem 0 0.3rem;
    font-size: 1.5rem;
    line-height: 1.1;
`}
`
export const CarouselAuthor = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0 0 0;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  opacity: 0.7;
  ${media.lessThan("large")`
    margin: 1rem 0.5rem 0 0.3rem;
    font-size: 0.7rem;
    line-height: 1.1;
`}
`
export const CarouselDescription = styled.span`
  display: flex;
  justify-content: center;
  margin: 2.5rem 2rem 0rem 2rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;
  background-color: lightgray;
  ${media.lessThan("large")`
    margin: 1rem 1rem 0 1rem;
    font-size: 1rem;
    line-height: 1.1;
`}
`
