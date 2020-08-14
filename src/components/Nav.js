import React from 'react'

import LinkList from './Menu/LinkList'
import NavMenu from './Menu/NavMenu'
import Backdrop from './Menu/Backdrop'
import './Nav.css'

export default ({ isMenuOpen, clickHandler }) => {
  return (
    <nav className="Nav">
      {/* For mobile */}
      <NavMenu />
      {/* For desktop */}
      <LinkList click={clickHandler} />
    </nav>
  )
}
