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

	const { small } = constants
	const articleImageStyle = type === small ? smallStyles.implicitImage : largeStyles.articleImage

	if (!articleImages) {
		return <img
			src={defaultImage}
			alt="default"
			className={articleImageStyle}
		/>
	}

	return <img src={articleImages[0].url} alt={articleImages[0].format} className={articleImageStyle} />
}

export default ArticleGridImage
