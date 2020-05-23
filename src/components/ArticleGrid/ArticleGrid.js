import React from 'react'
import styles from './ArticleGrid.module.css'
import ArticleGridItem from './ArticleGridItem/ArticleGridItem'


const ArticleGrid = ({ articles }) => {

	return (
		<div className={styles.parent}>
			{articles.map((anArticle, index) => {
				const gridClass = styles[`div${index}`]

				return <ArticleGridItem
					key={anArticle.created_date}
					article={anArticle}
					gridClass={gridClass}
				/>
			})}
		</div>
	)
}

export default ArticleGrid