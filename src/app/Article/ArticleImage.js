import React from 'react'
import styles from './ArticlePage.module.css'
import constants from '../../utilities/constants'
import defaultImage from '../../news-default.png'

/**
 * This ArticleImage component handles API edge case
 * in case images are not returned back in the response.
 * @param {Object | null} articleImage 
 * 	New York Times multimedia
 */
const ArticleImage = ({ articleImages }) => {

	const { superJumbo } = constants

	// Sometimes the response returns null
	// if null, create default object for articleImage
	const image = articleImages
		? articleImages.find(image => image.format === superJumbo)
		: { caption: '', copyright: '', url: defaultImage }

	const backgroundImage = { backgroundImage: `url(${image.url})` }

	return (
		<div style={backgroundImage} className={styles.articleBackgroundImage}>
			<span role="img" aria-label={image.caption}></span>
		</div>
	)
}

export default ArticleImage