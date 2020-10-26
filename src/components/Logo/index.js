import React from "react"
import { Link } from "gatsby"
//import getThemeColor from "../../utils/getThemeColor"
import LogoSite from "./desertologo.svg"

const Logo = () => (
  <Link to="/">
      <img src={LogoSite} alt="logo" className="logo" />
  </Link>
)

export default Logo
