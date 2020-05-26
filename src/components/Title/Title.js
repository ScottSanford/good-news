import React from 'react'
import styles from './Title.module.css'

const Title = ({ title, section = 'today' }) => {

	const conditional = section === 'world' || section === 'arts'
	const definiteArticle = conditional ? 'the ' : ''

	return (
		<div className={styles.Title}>
			<span className={styles.page}>{title}</span>
			<span className={styles.news}>{`${definiteArticle}${section}`}</span>
		</div>
	)
}

export default Title