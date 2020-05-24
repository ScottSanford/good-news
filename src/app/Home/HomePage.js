import React, { useState } from 'react'
import data from './mock'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import Title from '../../components/Title/Title'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'

const HomePage = () => {

	const [activeComponent, setActiveComponent] = useState(<ArticleGrid articles={data} />)
	const pageTitle = 'Explore'

	// setTimeout(() => {
	// 	setActiveComponent(<ArticleGrid articles={data} />)
	// }, 2000)

	return (
		<div>
			<Title title={pageTitle} />
			{activeComponent}
		</div>
	)
}

export default HomePage