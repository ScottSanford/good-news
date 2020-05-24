import React from 'react'
import styles from './ArticleGridItem.module.css'
import moment from 'moment'

const ImplicitGridItem = ({ article, gridClass }) => {

	const fromNowDate = moment(article.created_date).fromNow()

	return (
		<div className={gridClass}>
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{article.title}</div>
				<div className={styles.articleDate}>{fromNowDate}</div>
			</div>
		</div>
	)
}

export default ImplicitGridItem