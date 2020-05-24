import React from 'react'
import styles from './ArticleGrid.module.css'
import ArticleGridItem from './ArticleGridItem/ArticleGridItem'


const ArticleGrid = ({ articles }) => {

	return (
		<div className={styles.parent}>
			{articles.map((anArticle, index) => {
				const gridItemClass = index < 5 ? styles[`article${index + 1}`] : styles.articleImplicit
				return <ArticleGridItem
					key={anArticle.created_date}
					article={anArticle}
					gridClass={gridItemClass}
				/>
			})}
		</div>
	)
}

export default ArticleGrid