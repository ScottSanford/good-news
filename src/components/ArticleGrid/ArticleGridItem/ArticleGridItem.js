import React from 'react'
import styles from './ArticleGridItem.module.css'
import moment from 'moment'

const ArticleGridItem = ({ article, gridClass }) => {

	const { format, url } = article.multimedia[0]
	const fromNowDate = moment(article.created_date).fromNow()

	return (
		<div className={gridClass}>
			<img src={url} alt={format} className={styles.articleImage} />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{article.title}</div>
				<div className={styles.articleDate}>{fromNowDate}</div>
			</div>
		</div>
	)
}

export default ArticleGridItem