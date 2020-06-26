import React from "react"
import { Link } from "gatsby"
//import getThemeColor from "../../utils/getThemeColor"
import LogoSite from "./desertologo.svg"
import * as S from "./styled"

const Logo = () => (
  <Link to="/">
    <S.LogoWrapper>
      <img src={LogoSite} alt="logo" className="logo" />
    </S.LogoWrapper>
  </Link>
)

export default Logo
