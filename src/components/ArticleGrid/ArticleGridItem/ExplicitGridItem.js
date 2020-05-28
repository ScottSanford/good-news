import React from 'react'
import styles from './ArticleGridItem.module.css'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import defaultImage from '../../../news-default.png'
import truncate from '../../../utilities/truncate'

const ExplicitGridItem = ({ article, gridClass }) => {

	// React Router DOM
	const history = useHistory()

	// Sometimes NYT API returns null for their images :(
	const articleImage = article.multimedia
		? <img src={article.multimedia[0].url} alt={article.multimedia[0].format} className={styles.articleImage} />
		: <img src={defaultImage} alt="default" className={styles.articleImage} />

	const fromNowDate = moment(article.created_date).fromNow()

	const handleArticleClick = () => {
		/**
		 * There are a few ways to pass data to child component.
		 * A few reasons with this approach:
		 * 1. I love the declarative style with React Router Hooks.
		 * 2. NWT API returns the full schema back already (no need to made another api call).
		 * 3. Child component should not be managing state (Dumb/Stateless component).
		 * 4. If another API was needed, I would create a State/Smart Component,
		 * perform API call/manage state, and create a Stateless/Dumb/UI component.
		 */
		history.push({
			pathname: `/article`,
			state: { article }
		})
	}

	return (
		<div className={gridClass} onClick={handleArticleClick} data-testid="articleGrid">
			{articleImage}
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{truncate(article.title, 65)}</div>
				<div className={styles.articleDate}>{fromNowDate}</div>
			</div>
		</div>
	)
}

export default ExplicitGridItem