import React from 'react'

import NavLink from '../NavLink'
import '../Nav.css'
import classes from './MobileNav.module.css'

export default ({ click }) => (
  <React.Fragment>
    <div className={classes.Mobile} onClick={click}>
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
  </React.Fragment>
)
