import React from 'react'
import styles from './Title.module.css'

const Title = ({ title }) => {
	return (
		<div className={styles.Title}>
			<span className={styles.page}>{title}</span>
			<span className={styles.news}>today</span>
		</div>
	)
}

export default Title