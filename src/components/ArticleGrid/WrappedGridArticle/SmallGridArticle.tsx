import React from 'react'
import styles from './SmallGridArticle.module.css'
import moment from 'moment'
import titleCase from '../../../utilities/title-case'
import truncate from '../../../utilities/truncate'
import constants from '../../../utilities/constants'

import ArticleGridImage from './ArticleGridImage'
import SectionIcon from '../../SectionIcon/SectionIcon'

interface SmallGridArticleProps {
	article: any
	gridClass: any
	onArticleClick: any
}

const SmallGridArticle: React.FC<SmallGridArticleProps> = ({ article, gridClass, onArticleClick }) => {

	const { maxSmallCardTitleLength } = constants
	const fromNowDate = moment(article.created_date).fromNow()

	return (
		<div className={`${gridClass} ${styles.ImplicitGridItem}`} onClick={() => onArticleClick()}>
			<SectionIcon section={article.section} styleClass={styles.articleIcon} />
			<ArticleGridImage articleImages={article.multimedia} type="small" />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{truncate(article.title, maxSmallCardTitleLength)}</div>
				<div className={styles.supportingInfo}>
					<div className={styles.articleDate}>{fromNowDate}</div>
					<div className={styles.articleSection}>{titleCase(article.section)}</div>
				</div>
			</div>
		</div>
	)
}

export default SmallGridArticle