import React from "react"
import links from "./content"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const NavBar = () => {
  return (
    <S.LayoutNav>
      {links.map((link, i) => (
        <S.LayoutList key={i}>
          <S.LayoutLink to={link.url} activeClassName="active"  direction="right" duration={0.5} bg={getThemeColor()}>
            {link.label}
            {link.icon}
          </S.LayoutLink>
        </S.LayoutList>
      ))}
    </S.LayoutNav>
  )
}

export default NavBar
