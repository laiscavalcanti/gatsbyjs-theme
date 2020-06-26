import React from "react"
//import styled from "styled-components"
import Logo from "../Logo"
import * as S from "./styled"
import NavBar from "../NavBar"
//import NavBar from "../NavBar"
//import ButtonTheme from "../ButtonTheme"
//import MenuToggle from "./Toggle"

/*const handleClick = event => {
  const menu = document.querySelector(".menu-toggle")
  menu.classList.toggle("toggle")
  event.target.parentNode.classList.toggle("toggle")
}*/

const Header = () => {
  return (
    <S.SideBarWrapper>
      <NavBar />
      <S.LogoItem>
        <Logo />
      </S.LogoItem>
    </S.SideBarWrapper>
  )
}

export default Header
