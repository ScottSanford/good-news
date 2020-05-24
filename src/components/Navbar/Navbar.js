import React from 'react'
import logo from '../../logo.png'
import styles from './Navbar.module.css'

import MenuList from './MenuList'

const Navbar = () => {

	const menuList = ['World', 'Politics', 'Arts', 'Tech', 'Sports']

	return (
		<div className={styles.Navbar}>
			<img alt="logo" src={logo} className={styles.logo} />
			<MenuList menu={menuList} />
		</div>
	)
}

export default Navbar