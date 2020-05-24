import React from 'react'
import useFetch from '../../utilities/useFetch'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'

const HomePage = () => {

	const apiUrl = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${process.env.REACT_APP_NYTAPIKEY}`
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