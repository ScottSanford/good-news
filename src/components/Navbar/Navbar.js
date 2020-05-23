import React from 'react'
import logo from '../../logo.svg'
import styles from './Navbar.module.css'

import MenuList from './MenuList'

const Navbar = () => {
	const menuList = ['Tech', 'Arts', 'Politics']

	return (
		<div className={styles.Navbar}>
			<img alt="logo" src={logo} className={styles.logo} />
			<MenuList menu={menuList} />
		</div>
	)
}

export default Navbar