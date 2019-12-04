import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

export default ({ children }) => (
  <div>
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
)
