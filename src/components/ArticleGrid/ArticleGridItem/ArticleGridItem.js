import React from 'react'
import styles from './ArticleGridItem.module.css'


const ArticleGridItem = ({ article, gridClass }) => {

	return (
		<div className={gridClass}>
			<div>{article.title}</div>
		</div>
	)
}

export default ArticleGridItem