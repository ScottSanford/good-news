import React from 'react'
import styles from './ArticleGrid.module.css'

import ExplicitGridItem from './ArticleGridItem/ExplicitGridItem'
import ImplicitGridItem from './ArticleGridItem/ImplicitGridItem'
import WrappedArticleGridItem from './ArticleGridItem/ArticleGridItem'


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
					? WrappedArticleGridItem(ExplicitGridItem, passThroughProps)
					: WrappedArticleGridItem(ImplicitGridItem, passThroughProps)
			})}
		</div>
	)
}

export default ArticleGrid