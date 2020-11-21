import React from 'react'
import styles from './ArticlePage.module.css'
import constants from '../../utilities/constants'
import defaultImage from '../../img/news-default.png'
import { Multimedia } from '../../utilities/api'

interface ArticleImageProps {
	articleImages: Multimedia[]
}

const ArticleImage: React.FC<ArticleImageProps> = ({ articleImages }) => {

	const { superJumbo } = constants

	// Sometimes the response returns null
	// if null, create default object for articleImage
	const image = articleImages
		? articleImages.find((image: Multimedia) => image.format === superJumbo)
		: { caption: '', copyright: '', url: defaultImage }

	const backgroundImage = { backgroundImage: `url(${image?.url})` }

	return (
		<div style={backgroundImage} className={styles.articleBackgroundImage}>
			<span role="img" aria-label={image?.caption}></span>
		</div>
	)
}

export default ArticleImage
