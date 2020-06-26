import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import * as S from "./styled"

const Footer = () => {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarItem>
          <Profile />
        </S.MenuBarItem>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem></S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default Footer
