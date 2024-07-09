import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({authenticate}) => {
  return (
    <div>
      <Header authenticate={authenticate} />
      <Outlet/>
    </div>
  )
}

export default Layout
