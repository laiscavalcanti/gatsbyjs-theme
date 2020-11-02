import React from "react"
import getThemeColor from "../../utils/getThemeColor"
import LogoSite from "./desertologo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S  from'./styled';

const Logo = () => (
  <AniLink to="/" cover direction="left" duration={0.5} bg={getThemeColor()}>
    <S.LogoWrapper>
      <img src={LogoSite} alt="logo" className="logo" />
      </S.LogoWrapper>
  </AniLink>
)

export default Logo
