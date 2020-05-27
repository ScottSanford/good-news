import React from 'react'
import styles from './GridSkeleton.module.css'

const GridSkeleton = () => {

	// Repeat over Empty Article Grid Items
	const repeatEmptyArticles = [1, 2, 3, 4, 5].map(number => {

		const emptyArticleClass = `emptyArticle${number}`

		return (
			<div key={number.toString()} className={`${styles[emptyArticleClass]} ${styles.loading}`}>
				<div className={styles.emptyArticleInfo}></div>
			</div>
		)
	})

	return (
		<div className={styles.GridSkeleton} data-testid="loading">
			{repeatEmptyArticles}
		</div>
	)
}

export default GridSkeleton