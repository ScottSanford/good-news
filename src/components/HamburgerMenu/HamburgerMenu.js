import React from 'react'
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({ menuItems }) => {

	return (
		<nav role="navigation" className={styles.HamburgerMenu}>
			<div className={styles.menuToggle}>

				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>

				<ul className={styles.menu}>
					{menuItems.map(anItem => <a key={anItem} href="#"><li className={styles.item}>{anItem}</li></a>)}
				</ul>
			</div>
		</nav>
	)
}

export default HamburgerMenu