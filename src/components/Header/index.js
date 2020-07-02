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

const resizeHeaderOnScroll = () => {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.querySelector(".header")

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller")
  } else {
    headerEl.classList.remove("smaller")
  }
}
window.addEventListener("scroll", resizeHeaderOnScroll)

const Header = () => {
  return (
    <S.SideBarWrapper className="header">
      <NavBar className="header" />
      <S.LogoItem className="header">
        <Logo />
      </S.LogoItem>
    </S.SideBarWrapper>
  )
}

export default Header
