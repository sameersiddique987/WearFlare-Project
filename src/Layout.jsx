
import React from 'react'
import ResponsiveAppBar from './component/ResponsiveAppBar'

import { Outlet } from 'react-router-dom'
import MiniNav from './component/MiniNav'
import WhatsAppButton from './component/Button/WhatsAppButton'

function Layout() {
  return (
    <>

    <MiniNav/>
    <ResponsiveAppBar />
   
    <Outlet />
    <WhatsAppButton/>
    </>
  )
}

export default Layout