import React, {useState} from "react"
import Logo from "../Logo"
import * as S from "./styled"
import NavBar from "../NavBar"
import ButtonTheme from "../ButtonTheme"


/*const handleClick = event => {
  const menu = document.querySelector(".menu-toggle")
  menu.classList.toggle("toggle")
  event.target.parentNode.classList.toggle("toggle")
}*/

/*const resizeHeaderOnScroll = () => {
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
*/

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <S.SideBarWrapper>
     
      <S.NavWrapper>
        <S.Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <S.Hamburger open /> : <S.Hamburger />}
        </S.Toggle>
        {navbarOpen ? (
          <S.NavBox>
            <NavBar />
            <S.WrapperButtonTheme>
              <ButtonTheme />
            </S.WrapperButtonTheme>
          </S.NavBox>
        ) : (
          <S.NavBox open>
            <NavBar />
            <S.WrapperButtonTheme>
              <ButtonTheme />
            </S.WrapperButtonTheme>
          </S.NavBox>
        )}
      </S.NavWrapper>
      <S.LogoItem>
        <Logo />
      </S.LogoItem>
    </S.SideBarWrapper>
  )
}

export default Header
