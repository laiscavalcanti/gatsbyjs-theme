import React from "react"
import { Search } from "@styled-icons/boxicons-solid/Search"
import styled from "styled-components"
import media from "styled-media-query"

const Icon = () => (
  <IconSearch>
    <Search />
  </IconSearch>
)
export const IconSearch = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  background: none;
  cursor: pointer;
  ${media.lessThan("large")`
    height:20px;
    width: 20px;
    margin: 0;
  `}
  color: #be1622;
  &:hover {
    color: #be1622;
  }
`
export default Icon
