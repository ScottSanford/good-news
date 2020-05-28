import React from 'react'
import styles from './ArticleGrid.module.css'

import ExplicitGridItem from './WrappedGridArticle/ExplicitGridItem'
import ImplicitGridItem from './WrappedGridArticle/ImplicitGridItem'
import WrappedGridArticle from './WrappedGridArticle/WrappedGridArticle'


const ArticleGrid = ({ articles }) => {

	return (
		<div className={styles.parent} data-testid="articleList">
			{articles.map((anArticle, index) => {
				const condition = index < 5
				const gridItemClass = condition ? styles[`article${index + 1}`] : styles.articleImplicit
				const passThroughProps = {
					key: index.toString(),
					article: anArticle,
					gridClass: gridItemClass,
				}

				return condition
					? WrappedGridArticle(ExplicitGridItem, passThroughProps)
					: WrappedGridArticle(ImplicitGridItem, passThroughProps)
			})}
		</div>
	)
}

export default ArticleGrid