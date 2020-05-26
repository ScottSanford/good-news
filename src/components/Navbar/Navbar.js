import React from 'react'
import styles from './Navbar.module.css'
import { useHistory } from 'react-router-dom'
import logo from '../../logo.png'

import MenuList from './MenuList'

const Navbar = () => {

	const history = useHistory()

	const menuList = [
		{ title: 'World', section: 'world', isActive: false },
		{ title: 'Politics', section: 'politics', isActive: false },
		{ title: 'Arts', section: 'arts', isActive: false },
		{ title: 'Tech', section: 'technology', isActive: false },
		{ title: 'Sports', section: 'sports', isActive: false },
	]
	const handleLogoClick = () => history.push('/')

	return (
		<div className={styles.Navbar}>
			<img alt="logo" src={logo} className={styles.logo} onClick={handleLogoClick} />
			<MenuList menu={menuList} />
		</div>
	)
}

export default Navbar