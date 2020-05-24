import React from 'react'
import styles from './ArticleGridItem.module.css'

const ArticleGridItem = ({ article, gridClass }) => {

	const { multimedia } = article

	return (
		<div className={gridClass}>
			<img src={multimedia[0].url} alt={multimedia[0].format} className={styles.articleImage} />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{article.title}</div>
				<div className={styles.articleDate}>{article.created_date}</div>
			</div>
		</div>
	)
}

export default ArticleGridItem