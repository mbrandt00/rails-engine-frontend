import React from 'react'
import NavbarComponent from './NavbarComponent';
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <NavbarComponent/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout