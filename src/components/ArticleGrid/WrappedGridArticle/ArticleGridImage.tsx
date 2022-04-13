import React from 'react'
import largeStyles from './ArticleGridItem.module.css'
import smallStyles from './SmallGridArticle.module.css'
import constants from '../../../utilities/constants'
import defaultImage from '../../../img/news-default.png'


interface ArticleGridImageProps {
	articleImages: any
	type: any
}

const ArticleGridImage: React.FC<ArticleGridImageProps> = ({ articleImages, type }) => {

	const { small, superJumbo, thumbLarge } = constants
	const articleImageStyle = type === small ? smallStyles.implicitImage : largeStyles.articleImage
	const imageType = type === small ? thumbLarge : superJumbo

	if (articleImages) {
		const { format, url } = articleImages.find((image: any) => image.format === imageType)
		return <img src={url} alt={format} className={articleImageStyle} />
	}

	return <img
		src={defaultImage}
		alt="default"
		className={articleImageStyle}
	/>

}

export default ArticleGridImage
