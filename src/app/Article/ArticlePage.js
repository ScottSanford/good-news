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

	// Use object deconstruction to easily get access to object properties.
	const {
		abstract,
		byline,
		multimedia,
		published_date,
		title
	} = location.state.article

	setDocumentTitle(title)

	const heroImage = multimedia[0].url
	const heroImageCaption = multimedia[0].caption
	const heroImageCopyright = multimedia[0].copyright
	const publishedDateConverted = moment(published_date).format('MMM DD, YYYY')

	const backgroundImage = {
		backgroundImage: `url(${heroImage})`,
	}

	return (
		<div className={styles.ArticlePage}>
			<div style={backgroundImage} className={styles.articleBackgroundImage}>
				<span role="img" aria-label={heroImageCaption}></span>
			</div>
			<div className={styles.articleImageCopyright}>{heroImageCopyright}</div>
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