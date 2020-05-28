import React from 'react'
import styles from './ArticleGridItem.module.css'
import moment from 'moment'
import truncate from '../../../utilities/truncate'
import constants from '../../../utilities/constants'

import ArticleGridImage from './ArticleGridImage'

const ExplicitGridItem = ({ article, gridClass, onArticleClick }) => {

	const { maxLargeCardTitleLength } = constants
	const fromNowDate = moment(article.created_date).fromNow()

	return (
		<div className={gridClass} onClick={() => onArticleClick()} data-testid="articleGrid">
			<ArticleGridImage articleImages={article.multimedia} type="large" />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{truncate(article.title, maxLargeCardTitleLength)}</div>
				<div className={styles.articleDate}>{fromNowDate}</div>
			</div>
		</div>
	)
}

export default ExplicitGridItem