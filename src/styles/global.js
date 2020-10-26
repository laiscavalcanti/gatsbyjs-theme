import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

*, 
*:after,
*:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
}

body{
    font-size: 100%;
    background-color: black;
    background: white;
    line-height: 1;
    font-size: 100%;
    font-family: 'Oswald', serif;
}

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  
  body.light{
    --sameColorBlack: #191919;
    --sameColorWhite: #fff;
    --borders: #222;
    --texts: #000000;
    --color: #be1622;
    --background-color: #00000;
    --black:#222;
    --white:#191919;
    --borderSideBar: #222;
    --colorSideBar: #222;
    --highlight: #ffd700;
    --colorSelection: #fff;
    --backgroundSelection: #900020;
  }

  body.dark{
    --sameColorBlack: #191919;
    --sameColorWhite: #fff;
    --borders: #fff;
    --texts: #fff;
    --color: #be1622;
    --background-color: #191919;
    --black: #fff;
    --white:#191919;
    --borderSideBar: #fff;
    --colorSideBar: #222;
    --highlight: #ffd700;
    --colorSelection: #900020;
    --backgroundSelection: #fff;
    --colorHover: #698eb4;
  }
`
export default GlobalStyles
