import React from 'react'
import styles from './HomePage.module.css'
import data from './mock'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import Title from '../../components/Title/Title'

const HomePage = () => {

	const pageTitle = 'Explore'

	return (
		<div>
			<Title title={pageTitle} />
			<ArticleGrid articles={data} />
		</div>
	)
}

export default HomePage