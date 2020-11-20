import React, { useEffect, useState } from 'react';
import NavBar from "../NavBar"
import ButtonTheme from "../ButtonTheme"
import Logo from '../Logo';
import * as S from "./styled"

const Header = ({ }) => {
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false)

  const onScroll = (e) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 100;
    if (distanceY >= shrinkOn)
      setShrink(true);
    else
      setShrink(false);
  }

  const handleClick = () => {
    setOpen(!open);
  }
  useEffect(() => {
    // Turn off scroll when menu open
    let x = document.getElementsByTagName("html")[0];
    let style = "visible";
    if (open)
      style = "hidden";
    document.body.style.overflow = style;
    x.style.overflow = style;
  }, [open])

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  });

  return (
    <S.HeaderDiv shrink={shrink}>
     
      <S.Menu
        isOpen={open}
        menuClicked={handleClick}
        strokeWidth={3}
        color='#be1622'
        animationDuration={0.5}
      />
      <S.Nav className={`${open ? "active" : ""}`}>
       <NavBar />
          <ButtonTheme />
      </S.Nav>
      <S.LogoStyled shrink={shrink}>
      <Logo/>
      </S.LogoStyled>
    </S.HeaderDiv>
  )
}

export default Header
