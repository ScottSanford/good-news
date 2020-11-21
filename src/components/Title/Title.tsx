import React from 'react'
import styles from './Title.module.css'

interface TitleProps {
	title: string
	section: string
}

const Title: React.FC<TitleProps> = ({ title = 'Explore', section = 'today' }) => {

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