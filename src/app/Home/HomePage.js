import React from 'react'
import useFetch from '../../utilities/useFetch'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'

const HomePage = () => {

	const apiKey = 'LkDbPZkZVcdDjWWLSrXwAhEOfi2QD3G9'
	const apiUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
	const pageTitle = 'Explore'
	const { response } = useFetch(apiUrl)

	const activeComponent = !response
		? <GridSkeleton />
		: <ArticleGrid articles={response.results} />

	return (
		<div>
			<Title title={pageTitle} />
			{activeComponent}
		</div>
	)
}

export default HomePage