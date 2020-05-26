import React from 'react'
import styles from './ArticlePage.module.css'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import articleContent from './article-content'
import setDocumentTitle from '../../utilities/document-title'

import Error from '../../components/Error/Error'
import Paywall from '../../components/Paywall/Paywall'


const ArticlePage = () => {

	const location = useLocation()
	if (!location.state) {
		return <Error />
	}

	// Use object destructuring to easily get access to object properties.
	const {
		abstract,
		byline,
		multimedia,
		published_date,
		title
	} = location.state.article
	const { caption, copyright, url } = multimedia[0]
	const backgroundImage = { backgroundImage: `url(${url})`, }

	setDocumentTitle(title)

	// Format the article date to readable format.
	const publishedDateConverted = moment(published_date).format('MMM DD, YYYY')


	return (
		<div className={styles.ArticlePage}>
			<div style={backgroundImage} className={styles.articleBackgroundImage}>
				<span role="img" aria-label={caption}></span>
			</div>
			<div className={styles.articleImageCopyright}>{copyright}</div>
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

				<div className={styles.fader}></div>
			</div>
			<Paywall />
		</div>
	)
}

export default ArticlePage