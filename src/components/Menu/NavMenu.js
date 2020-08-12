import React from 'react'

import styles from './NavMenu.module.css'

export default (props) => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
