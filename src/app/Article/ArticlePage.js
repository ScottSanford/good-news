import React from 'react'
import styles from './ArticlePage.module.css'
import { useHistory, useLocation } from 'react-router-dom'
import moment from 'moment'
import articleContent from './article-content'

import Paywall from '../../components/Paywall/Paywall'


const ArticlePage = () => {

	const history = useHistory()
	const location = useLocation()
	if (!location.state) {
		history.push('/')
	}
	console.log(location.state.article)
	// Use object deconstruction to easily get access to object properties.
	const {
		abstract,
		byline,
		multimedia,
		published_date,
		title
	} = location.state.article

	const heroImage = multimedia[0].url
	const heroImageCaption = multimedia[0].caption
	const publishedDateConverted = moment(published_date).format('MMM DD, YYYY')

	const backgroundImage = {
		backgroundImage: `url(${heroImage})`,
	}

	return (
		<div className={styles.ArticlePage}>
			<div style={backgroundImage} className={styles.articleBackgroundImage}>
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

				<div className={styles.fader}></div>
			</div>
			<Paywall />
		</div>
	)
}

export default ArticlePage