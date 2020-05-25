import React from 'react'
import styles from './ArticleGridItem.module.css'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import truncate from '../../../utilities/truncate'

const ExplicitGridItem = ({ article, gridClass }) => {

	// React Router DOM
	const history = useHistory()

	const { format, url } = article.multimedia[0]
	const fromNowDate = moment(article.created_date).fromNow()

	const handleArticleClick = () => {
		history.push({
			pathname: '/article',
			state: { article }
		})
	}

	return (
		<div className={gridClass} onClick={handleArticleClick}>
			<img src={url} alt={format} className={styles.articleImage} />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{truncate(article.title, 65)}</div>
				<div className={styles.articleDate}>{fromNowDate}</div>
			</div>
		</div>
	)
}

export default ExplicitGridItem