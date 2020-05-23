import React from 'react'
import logo from '../../logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<img alt="logo" src={logo} className={styles.logo} />
		</div>
	)
}

export default Navbar