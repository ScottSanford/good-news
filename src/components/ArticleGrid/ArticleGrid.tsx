import React from 'react'
import styles from './ArticleGrid.module.css'
import constants from '../../utilities/constants'
import { useHistory } from 'react-router-dom'
import { NYTArticle } from '../../utilities/api'

import LargeGridArticle from './WrappedGridArticle/LargeGridArticle'
import SmallGridArticle from './WrappedGridArticle/SmallGridArticle'
import WrappedGridArticle from './WrappedGridArticle/WrappedGridArticle'

interface ArticleGridProps {
	articles: NYTArticle[]
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {

	const history = useHistory()
	const { topArticleIndex } = constants
	const isATopArticle = (index: number) => index < topArticleIndex

	return (
		<div className={styles.parent} data-testid="articleList">
			{articles.map((anArticle: NYTArticle, index: number) => {

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
					// The first 5 articles will be displayed with full images
					? WrappedGridArticle(LargeGridArticle, passThroughProps)
					// After 5, articles will be in a Card Format
					: WrappedGridArticle(SmallGridArticle, passThroughProps)
			})}
		</div>
	)
}

export default ArticleGrid