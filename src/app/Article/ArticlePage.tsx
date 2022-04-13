import React from 'react'
import styles from './ArticlePage.module.css'
import { useHistory, useLocation } from 'react-router-dom'
import moment from 'moment'
import articleContent from './article-content'
import constants from '../../utilities/constants'
import setDocumentTitle from '../../utilities/document-title'

import ArticleImage from './ArticleImage'
import Paywall from '../../components/Paywall/Paywall'
import { Multimedia, NYTArticle } from '../../utilities/api'

interface LocationState {
	article: NYTArticle
}

function ArticlePage() {

	const history = useHistory()
	const location = useLocation<LocationState>()
	const { articleDateFormat, superJumbo } = constants

	if (!location.state) history.push('/')


	const {
		abstract,
		byline,
		multimedia,
		published_date,
		title
	} = location.state.article

	setDocumentTitle(title)

	const imageCopyright = multimedia[0].copyright

	// Format the article date to readable format.
	const publishedDateConverted = moment(published_date).format(articleDateFormat)


	return (
		<div className={styles.ArticlePage} data-testid="articlePage">
			<ArticleImage articleImages={multimedia} />
			<div className={styles.articleImageCopyright}>{imageCopyright}</div>
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
