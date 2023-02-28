import React from 'react'
import Navbar from './Navbar'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

function Layout({ children }: IProps) {
  return (
    <div className='relative'>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
