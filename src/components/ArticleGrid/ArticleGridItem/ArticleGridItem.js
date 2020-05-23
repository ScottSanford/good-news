import React from 'react'
import styles from './ArticleGridItem.module.css'

function articleImage(img) {

	const colorOverlay = 'rgba(153, 175, 235, .45)'

	return {
		backgroundImage: `linear-gradient(${colorOverlay}, ${colorOverlay}), url(${img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		minWidth: '100%',
		minHeight: '100%',
		// position: 'relative',
	}
}

const ArticleGridItem = ({ article, gridClass }) => {
	const { multimedia } = article
	return (
		<div className={gridClass} style={articleImage(multimedia[0].url)}>
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{article.title}</div>
				<div className={styles.articleDate}>{article.created_date}</div>
			</div>
		</div>
	)
}

export default ArticleGridItem