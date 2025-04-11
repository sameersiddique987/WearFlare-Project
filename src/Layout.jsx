
import React from 'react'
import ResponsiveAppBar from './component/ResponsiveAppBar'

import { Outlet } from 'react-router-dom'
import MiniNav from './component/MiniNav'

function Layout() {
  return (
    <>

    <MiniNav/>
    <ResponsiveAppBar />
   
    <Outlet />
    </>
  )
}

export default Layout