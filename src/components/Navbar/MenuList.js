import React from 'react'
import styles from './MenuList.module.css'
import { NavLink } from 'react-router-dom'

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu'

const MenuList = ({ menu }) => {

	return (
		<>
			<nav className={styles.MenuList}>
				{menu.map(anItem => (
					<NavLink
						key={anItem.section}
						to={`/section/${anItem.section}`}
						className={styles.item}
						activeClassName={styles.activeLink}
						aria-current="true"
						data-testid={`menu-${anItem.section}`}
						exact>
						{anItem.title}
					</NavLink>
				))}
			</nav>
			<HamburgerMenu menuItems={menu} />
		</>
	)
}

export default MenuList