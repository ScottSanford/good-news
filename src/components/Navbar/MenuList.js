import React from 'react'
import styles from './MenuList.module.css'

import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu'

const MenuList = ({ menu }) => {

	return (
		<>
			<div className={styles.MenuList}>
				{menu.map(anItem => <div key={anItem} className={styles.item}>{anItem}</div>)}
			</div>
			<HamburgerMenu menuItems={menu} />
		</>
	)
}

export default MenuList