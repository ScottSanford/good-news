import React from 'react'
import styles from './HamburgerMenu.module.css'
import { NavLink } from 'react-router-dom'

const HamburgerMenu = ({ menuItems }) => {

	return (
		<nav role="navigation" className={styles.HamburgerMenu}>
			<div className={styles.menuToggle}>

				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>

				<ul className={styles.menu}>
					{menuItems.map(anItem => (
						<NavLink
							key={anItem.section}
							className={styles.menuLink}
							to={`/section/${anItem.section}`}
							activeClassName={styles.activeLink}
							aria-current="true"
							data-testid={`hamburger-${anItem.section}`}
							exact>
							<li className={styles.item}>{anItem.title}</li>
						</NavLink>)
					)}
				</ul>
			</div>
		</nav>
	)
}

export default HamburgerMenu