import React from 'react'
import styles from './ImplicitGridItem.module.css'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import titleCase from '../../../utilities/title-case'
import truncate from '../../../utilities/truncate'
import constants from '../../../utilities/constants'

import ArticleGridImage from './ArticleGridImage'
import SectionIcon from '../../../components/SectionIcon/SectionIcon'

const ImplicitGridItem = ({ article, gridClass }) => {

	const history = useHistory()
	const { maxSmallCardTitleLength } = constants

	const fromNowDate = moment(article.created_date).fromNow()
	const handleArticleClick = () => {
		history.push({
			pathname: `/article`,
			state: { article }
		})
	}

	return (
		<div className={`${gridClass} ${styles.ImplicitGridItem}`} onClick={handleArticleClick}>
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

export default ImplicitGridItem