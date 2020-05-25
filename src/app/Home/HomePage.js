import React from 'react'
import useFetch from '../../utilities/useFetch'

import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import Error from '../../components/Error/Error'
import GridSkeleton from '../../components/GridSkeleton/GridSkeleton'
import Title from '../../components/Title/Title'

const HomePage = () => {

	// api key accessed through env variable
	const apiKey = process.env.REACT_APP_NYTAPIKEY
	const apiUrl = `https://api.nytimes.com/svc/topstorie/v2/sports.json?api-key=${apiKey}`
	const { response, error } = useFetch(apiUrl)

	const pageTitle = 'Explore'

	const activeComponent = error
		? <Error />
		: !response
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