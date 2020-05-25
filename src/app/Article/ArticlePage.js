import React from 'react'
import styles from './ArticlePage.module.css'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import setDocumentTitle from '../../utilities/document-title'

import articleContent from './article-content'

const ArticlePage = () => {

	const location = useLocation()
	console.log(location.state.article)
	// Use object deconstruction to easily get access to object properties.
	const {
		abstract,
		byline,
		multimedia,
		published_date,
		title
	} = location.state.article

	// Set the Tab title to article title (details matter)
	setDocumentTitle(title)

	const heroImage = multimedia[0].url
	const heroImageCaption = multimedia[0].caption
	const publishedDateConverted = moment(published_date).format('MMM DD, YYYY')

	const backgroundImage = {
		backgroundImage: `url(${heroImage})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderRadius: '1rem',
		boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
		height: '50rem',
		width: '100%',
	}

	return (
		<div className={styles.ArticlePage}>
			<div style={backgroundImage}>
				<span role="img" aria-label={heroImageCaption}></span>
			</div>
			<div className={styles.mainArticle}>
				<div className={styles.articleTitle}>{title}</div>
				<div className={styles.articleMeta}>
					<div className={styles.articleAuthor}>{byline}</div>
					<div className={styles.articlePublishedDate}>{publishedDateConverted}</div>
				</div>
				<div className={styles.articleAbstract}>
					{abstract}
					{articleContent.map((text, index) => <p key={index.toString()} className={styles.articleExtraText}>{text}</p>)}
				</div>
			</div>
		</div>
	)
}

export default ArticlePage