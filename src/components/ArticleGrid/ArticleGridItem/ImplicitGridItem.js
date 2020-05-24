import React from 'react'
import styles from './ImplicitGridItem.module.css'
import moment from 'moment'
import titleCase from '../../../utilities/title-case'
import truncate from '../../../utilities/truncate'

import SectionIcon from '../../../components/SectionIcon/SectionIcon'

const ImplicitGridItem = ({ article, gridClass }) => {

	const thumbLargeImageUrl = article.multimedia.find(image => image.format === 'thumbLarge').url
	const fromNowDate = moment(article.created_date).fromNow()

	return (
		<div className={`${gridClass} ${styles.ImplicitGridItem}`}>
			<SectionIcon section={article.section} styleClass={styles.articleIcon} />
			<img src={thumbLargeImageUrl} alt={article.title} className={styles.implicitImage} />
			<div className={styles.articleInfo}>
				<div className={styles.articleTitle}>{truncate(article.title, 70)}</div>
				<div className={styles.supportingInfo}>
					<div className={styles.articleDate}>{fromNowDate}</div>
					<div className={styles.articleSection}>{titleCase(article.section)}</div>
				</div>
			</div>
		</div>
	)
}

export default ImplicitGridItem