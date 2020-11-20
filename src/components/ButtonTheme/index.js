import React, { useState, useEffect } from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { Moon } from "@styled-icons/boxicons-solid/Moon"

const ButtonTheme = () => {
  const [theme, setTheme] = useState(null)
  const isLightMode = theme === "light"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])
  return (
    <WrapperLight
      title="Acender a luz"
      onClick={() => {
        window.__setPreferredTheme(isLightMode ? "dark" : "light")
      }}
      className={theme}
    >
      <IconLight>
        <Moon />
      </IconLight>
    </WrapperLight>
  )
}

export const WrapperLight = styled.p`
  height: auto;
  margin: 0.7rem 0 0 0.7rem;
  color: #be1622;
  ${media.lessThan("large")`
    margin: 0rem 5.8rem 3rem 0rem;
  `}

  &.light {
    color: #be1622;
    &:hover {
      color: var(--sameColorBlack);
    }
  }
  &:hover {
    color: #ffd700;
  }
`

export const IconLight = styled.div`
  width: 19px;
  height: 19px;
  border: none;
  background: none;
  cursor: pointer;
  ${media.lessThan("large")`
    height:19px;
    width: 19px;
    margin: 0;
  `}
`
export default ButtonTheme
