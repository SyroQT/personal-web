import React, { useState } from 'react'

import LinkList from './Menu/LinkList'
import NavMenu from './Menu/NavMenu'
import MobileNav from './Menu/MobileNav'
import './Nav.css'

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menu = isMenuOpen ? (
    <MobileNav click={() => setIsMenuOpen(false)} />
  ) : (
    <LinkList />
  )

  return (
    <nav className="Nav">
      {/* For mobile */}
      <NavMenu clicked={() => setIsMenuOpen(!isMenuOpen)} />

      {menu}
    </nav>
  )
}
