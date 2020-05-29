import React from 'react'
import largeStyles from './ArticleGridItem.module.css'
import smallStyles from './SmallGridArticle.module.css'
import constants from '../../../utilities/constants'
import defaultImage from '../../../img/news-default.png'

/**
 * This ArticleGridImage component handles API edge case
 * in case images are not returned back in the response.
 * @param {Object | null} articleImage 
 * 	New York Times multimedia
 * @param {string} type
 * 	'small' | 'large'
 */
const ArticleGridImage = ({ articleImages, type }) => {

	const { small, superJumbo, thumbLarge } = constants
	const articleImageStyle = type === small ? smallStyles.implicitImage : largeStyles.articleImage
	const imageType = type === small ? thumbLarge : superJumbo

	if (articleImages) {
		const { format, url } = articleImages.find(image => image.format === imageType)
		return <img src={url} alt={format} className={articleImageStyle} />
	}

	return <img
		src={defaultImage}
		alt="default"
		className={articleImageStyle}
	/>

}

export default ArticleGridImage