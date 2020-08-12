import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className="Nav">
    <div className="Nav--Container container">
      <Link to="/">
        <Logo />
      </Link>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/projects/" exact>
        Projects
      </NavLink>
      <NavLink to="/blog/" exact>
        Blog'as 500
      </NavLink>
      <NavLink to="/tutoring/" exact>
        Akademinė pagalba
      </NavLink>
      <NavLink to="/about/" exact>
        About
      </NavLink>
      <NavLink to="/contact/" exact>
        Contact
      </NavLink>
    </div>
  </nav>
)
