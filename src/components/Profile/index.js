import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          description
          author
        }
      }
    }
  `)
  return (
    <S.ProfileContainer>
      <S.ContainerLine>
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ContainerLine>
    </S.ProfileContainer>
  )
}

export default Profile
