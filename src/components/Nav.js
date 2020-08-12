import React from 'react'

import LinkList from './Menu/LinkList'
import NavMenu from './Menu/NavMenu'
import './Nav.css'

export default ({ handlePopupOpen }) => {
  const clickHandler = () => {}

  return (
    <nav className="Nav">
      {/* For mobile */}
      <NavMenu clicked={clickHandler} />
      {/* For desktop */}
      <LinkList />
    </nav>
  )
}
