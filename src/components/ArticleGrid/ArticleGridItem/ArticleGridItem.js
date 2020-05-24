import React from 'react'
import styles from './ArticleGridItem.module.css'
import moment from 'moment'

const ArticleGridItem = ({ article, gridClass }) => {

	const { multimedia } = article
	const fromNowDate = moment(article.created_date).fromNow()

	return (
		<div className={gridClass}>
			<img src={multimedia[0].url} alt={multimedia[0].format} className={styles.articleImage} />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{article.title}</div>
				<div className={styles.articleDate}>{fromNowDate}</div>
			</div>
		</div>
	)
}

export default ArticleGridItem