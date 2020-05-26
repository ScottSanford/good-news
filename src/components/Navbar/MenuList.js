import React from 'react'
import styles from './MenuList.module.css'

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu'

const MenuList = ({ menu }) => {

	return (
		<>
			<nav className={styles.MenuList}>
				{menu.map(anItem => <div key={anItem.section} className={styles.item}>{anItem.title}</div>)}
			</nav>
			<HamburgerMenu menuItems={menu} />
		</>
	)
}

export default MenuList