import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

class Slideshow extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const params =
      (".swiper-container",
      {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      })

    return (
      <S.CarouselWrapper>
        <div className="slideshow ">
          <div class="swiper-container">
            <Swiper {...params}>
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="carousel-items" key={post.fields.slug}>
                    <S.CarouselLink
                      to={post.fields.slug}
                      cover
                      direction="right"
                      duration={0.5}
                      bg={getThemeColor()}
                    >
                      <S.CarouselImage
                        fluid={post.frontmatter.image.childImageSharp.fluid}
                        alt="pictures-slide"
                      />
                      <S.CarouselInfo>
                        <S.CarouselTitle>
                          {post.frontmatter.title}
                        </S.CarouselTitle>
                        <S.CarouselDescription>
                          {post.frontmatter.description}
                        </S.CarouselDescription>
                      </S.CarouselInfo>
                    </S.CarouselLink>
                  </div>
                ))}
            </Swiper>
          </div>
        </div>
      </S.CarouselWrapper>
    )
  }
}

Slideshow.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { templateKey: { eq: "slideshow" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                author
                tags
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 60) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              timeToRead
            }
          }
        }
      }
    `}
    render={(data, count) => <Slideshow data={data} count={count} />}
  />
)
