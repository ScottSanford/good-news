import React from 'react'
import styles from './HamburgerMenu.module.css'
import { Link } from 'react-router-dom'

const HamburgerMenu = ({ menuItems }) => {

	return (
		<nav role="navigation" className={styles.HamburgerMenu}>
			<div className={styles.menuToggle}>

				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>

				<ul className={styles.menu}>
					{menuItems.map(anItem => <Link key={anItem.section} className={styles.menuLink} to="/"><li className={styles.item}>{anItem.title}</li></Link>)}
				</ul>
			</div>
		</nav>
	)
}

export default HamburgerMenu