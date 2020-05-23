import React from 'react'
import styles from './MenuList.module.css'

const MenuList = ({ menu }) => {

	return (
		<div className={styles.MenuList}>
			{menu.map(anItem => <div key={anItem} className={styles.item}>{anItem}</div>)}
		</div>
	)
}

export default MenuList