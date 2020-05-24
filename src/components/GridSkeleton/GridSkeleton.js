import React from 'react'
import styles from './GridSkeleton.module.css'

const GridSkeleton = () => {
	return (
		<div className={styles.GridSkeleton}>
			<div className={`${styles.emptyArticle1} ${styles.loading}`}></div>
			<div className={`${styles.emptyArticle2} ${styles.loading}`}></div>
			<div className={`${styles.emptyArticle3} ${styles.loading}`}></div>
			<div className={`${styles.emptyArticle4} ${styles.loading}`}></div>
			<div className={`${styles.emptyArticle5} ${styles.loading}`}></div>
		</div>
	)
}

export default GridSkeleton