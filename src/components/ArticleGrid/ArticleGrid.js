import React from 'react'
import styles from './ArticleGrid.module.css'
import constants from '../../utilities/constants'
import { useHistory } from 'react-router-dom'

import ExplicitGridItem from './WrappedGridArticle/ExplicitGridItem'
import ImplicitGridItem from './WrappedGridArticle/ImplicitGridItem'
import WrappedGridArticle from './WrappedGridArticle/WrappedGridArticle'


const ArticleGrid = ({ articles }) => {

	const history = useHistory()
	const { topArticleIndex } = constants
	const isATopArticle = (index) => index < topArticleIndex

	return (
		<div className={styles.parent} data-testid="articleList">
			{articles.map((anArticle, index) => {

				const gridItemClass = isATopArticle(index) ? styles[`article${index + 1}`] : styles.articleImplicit

				// props that will build out the small/large Article Cards.
				const passThroughProps = {
					key: index.toString(),
					article: anArticle,
					gridClass: gridItemClass,
					onArticleClick() {
						history.push({
							pathname: '/article',
							state: { article: anArticle },
						})
					}
				}

				return isATopArticle(index)
					? WrappedGridArticle(ExplicitGridItem, passThroughProps)
					: WrappedGridArticle(ImplicitGridItem, passThroughProps)
			})}
		</div>
	)
}

export default ArticleGrid