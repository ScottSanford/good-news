import React from 'react'
import styles from './Navbar.module.css'
import { useHistory } from 'react-router-dom'
import logo from '../../img/logo.png'

import MenuList from './MenuList'

const Navbar = () => {

	const history = useHistory()

	const menuList = [
		{ title: 'World', section: 'world' },
		{ title: 'Politics', section: 'politics' },
		{ title: 'Arts', section: 'arts' },
		{ title: 'Tech', section: 'technology' },
		{ title: 'Sports', section: 'sports' },
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