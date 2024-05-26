
import React from "react"
import MainHeader from "../components/MainHeader"

import { Outlet } from "react-router-dom"
// the outlet determines the place of the children defined
// in the react-router-dom in main.jsx should be placed

const RootLayout = () => {
  return (
    <>
        <MainHeader/>
        <Outlet/>
    </>
  )
}

export default RootLayout